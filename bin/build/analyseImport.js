const nodejs = require('@hai2007/nodejs');
const getFilePath = require('../tool/getFilePath');
const getMainUrl = require('../tool/getMainUrl');

module.exports = function (statement, filecontext, context) {
    let statementArray = statement.replace(/^import +/, '').split('from');
    let url = statementArray.pop();
    let args = [], def = '';

    if (statementArray.length > 0) {
        if (statementArray[0].indexOf('{') > -1) {
            args = statementArray[0].replace('{', '').replace('}', '').split(',');

            for (let i = 0; i < args.length; i++) {
                args[i] = args[i].trim();
            }

        } else {
            def = statementArray[0];
            args = ['__default__'];
        }
    }

    // 去掉字符串两边的空白和多余符号
    url = url.trim().replace(/['"]/g, '');

    // 路径变成全路径
    if (/^[.|\/]/.test(url)) {
        url = getFilePath(nodejs.fullPath(url, filecontext));
    } else {
        url = nodejs.fullPath("node_modules/" + url, context);
        url = getFilePath(url) || getMainUrl(url);
    }

    return { url, args, def };
};
