const analyseImport = require('./analyseImport');
const readFileSync = require('../tool/readFileSync');
const nodejs = require('@hai2007/nodejs');
const toInnerImport = require('./toInnerImport');

module.exports = function appendBundle(filepath, context) {
    nodejs.log("    ➟ " + filepath);

    let source = readFileSync(filepath);
    let importStatement = null;

    // 获取当前路径上下文
    let filecontext = nodejs.fullPath('../', filepath);

    // 【1】导入
    while (importStatement = /import[^'"]*(['|"]).+\1;*/.exec(source)) {
        importStatement = importStatement[0];

        // 获取导入语句的信息
        let importResult = analyseImport(importStatement.replace(/;$/, ''), filecontext, context);

        // 原生的导入语句改成内部可以支持的写法
        source = source.replace(importStatement, toInnerImport(importResult));
    }

    // 【2】导出
    source += 'return {};'

    return `
/*************************** [bundle] ****************************/
window.__nefbl_pack__bundleSrc__['${filepath}']=function(){
    ${source}
}`;

};
