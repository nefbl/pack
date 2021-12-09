const analyseImport = require('../tool/analyseImport');
const readFileSync = require('../tool/readFileSync');

module.exports = function (filepath) {
    let source = readFileSync(filepath);
    let importStatement = null;

    while (importStatement = /import[^'"]*(['|"]).+\1;*/.exec(source)) {
        importStatement = importStatement[0];

        // 获取导入语句的信息
        let importResult = analyseImport(importStatement.replace(/;$/, ''));
        console.log(importResult);

        source = source.replace(importStatement, "");
    }

    console.log(source);
};
