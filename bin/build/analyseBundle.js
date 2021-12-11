const analyseImport = require('./analyseImport');
const analyseExport = require('./analyseExport');
const readFileSync = require('../tool/readFileSync');
const nodejs = require('@hai2007/nodejs');
const toInnerImport = require('./toInnerImport');
const useLoader = require('../tool/useLoader');
const urlToIndex = require('./urlToIndex');

module.exports = function analyseBundle(filepath, config) {

    // 如果已经解析
    if (global.__nefbl_pack__rootBundle__.indexOf(filepath) > -1 || global.__nefbl_pack__currentBundle__.indexOf(filepath) > -1) {
        return "";
    }

    // 否则就记录下来
    else {

        // 记录在全局
        if (global.__nefbl_pack__isRootBundle__) {
            global.__nefbl_pack__rootBundle__.push(filepath);
        }

        // 记录在当前
        else {
            global.__nefbl_pack__currentBundle__.push(filepath);
        }
    }

    nodejs.log("    ➟ " + filepath);

    let bundleCode = "";

    // 获取当前路径上下文
    let filecontext = nodejs.fullPath('../', filepath);

    // 读取具体代码
    let source = (useLoader(filepath, config) || readFileSync(filepath)) + "\n  ";

    //【警告】
    // 对class转义后的代码进行特殊兼容
    source = source.replace(/export { _class as default };/, '__nefbl_pack__scope_bundle__.default=_class;');

    //【1】导入
    let importStatement = null;
    while (importStatement = /(?:^|\n) *import[^'"]*(['|"]).+\1;*/.exec(source)) {
        importStatement = importStatement[0].replace(/^\n/, '').trim();

        // 获取导入语句的信息
        let importResult = analyseImport(importStatement.replace(/;$/, ''), filecontext, config);

        // 解析依赖的bundle
        bundleCode += analyseBundle(importResult.url, config);

        // 原生的导入语句改成内部可以支持的写法
        source = source.replace(importStatement, toInnerImport(importResult));
    }

    //【2】导出
    let exportStatement = null;
    while (exportStatement = /(?:^|\n) *export [^\n]+\n/.exec(source)) {
        exportStatement = exportStatement[0].replace(/\n$/, '').replace(/^\n/, '').trim();

        // 获取导出语句的信息
        let exportResult = analyseExport(exportStatement);

        // 原生的导入语句改成内部可以支持的写法
        source = source.replace(exportStatement, exportResult);
    }

    return `${bundleCode}
/*************************** [bundle] ****************************/
// ${filepath}
/*****************************************************************/
window.__nefbl_pack__bundleSrc__['${urlToIndex(filepath)}']=function(){
    var __nefbl_pack__scope_bundle__={};
    var __nefbl_pack__scope_args__;
    ${source}
    return __nefbl_pack__scope_bundle__;
}`;

};
