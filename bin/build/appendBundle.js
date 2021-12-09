const analyseImport = require('../tool/analyseImport');
const readFileSync = require('../tool/readFileSync');
const nodejs = require('@hai2007/nodejs');

module.exports = function appendBundle(filepath, context) {
    let source = readFileSync(filepath);
    let importStatement = null;

    // 获取当前路径上下文
    let filecontext = nodejs.fullPath('../', filepath);

    while (importStatement = /import[^'"]*(['|"]).+\1;*/.exec(source)) {
        importStatement = importStatement[0];

        // 获取导入语句的信息
        let importResult = analyseImport(importStatement.replace(/;$/, ''), filecontext, context);
        console.log(importResult);

        source = source.replace(importStatement, "");
    }

    console.log(source);

};
