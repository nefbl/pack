const analyseImport = require('./analyseImport');
const readFileSync = require('../tool/readFileSync');
const nodejs = require('@hai2007/nodejs');
const toInnerImport = require('./toInnerImport');

module.exports = function appendBundle(filepath, context) {
    let source = readFileSync(filepath);
    let importStatement = null;

    // 获取当前路径上下文
    let filecontext = nodejs.fullPath('../', filepath);

    while (importStatement = /import[^'"]*(['|"]).+\1;*/.exec(source)) {
        importStatement = importStatement[0];

        // 获取导入语句的信息
        let importResult = analyseImport(importStatement.replace(/;$/, ''), filecontext, context);

        // 原生的导入语句改成内部可以支持的写法
        source = source.replace(importStatement, toInnerImport(importResult));
    }

    console.log(source);

};
