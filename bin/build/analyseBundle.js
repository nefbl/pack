const analyseImport = require('./analyseImport');
const analyseExport = require('./analyseExport');
const readFileSync = require('../tool/readFileSync');
const nodejs = require('@hai2007/nodejs');
const toInnerImport = require('./toInnerImport');

module.exports = function analyseBundle(filepath, context) {
    nodejs.log("    ➟ " + filepath);

    // 获取当前路径上下文
    let filecontext = nodejs.fullPath('../', filepath);

    // 读取具体代码
    let source = readFileSync(filepath);

    //【1】导入
    let importStatement = null;
    while (importStatement = /import[^'"]*(['|"]).+\1;*/.exec(source)) {
        importStatement = importStatement[0];

        // 获取导入语句的信息
        let importResult = analyseImport(importStatement.replace(/;$/, ''), filecontext, context);

        // 原生的导入语句改成内部可以支持的写法
        source = source.replace(importStatement, toInnerImport(importResult));
    }

    //【2】导出
    let exportStatement = null;
    while (exportStatement = /export.+\n/.exec(source)) {
        exportStatement = exportStatement[0].replace(/\n/, '');

        // 获取导出语句的信息
        let exportResult = analyseExport(exportStatement);

        // 原生的导入语句改成内部可以支持的写法
        source = source.replace(exportStatement, exportResult);
    }

    return `
/*************************** [bundle] ****************************/
window.__nefbl_pack__bundleSrc__['${filepath}']=function(){
    let __nefbl_pack__scope_bundle__={};
    ${source}
    return __nefbl_pack__scope_bundle__;
}`;

};
