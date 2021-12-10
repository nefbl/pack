const urlToIndex = require('./urlToIndex');

module.exports = function (importResult) {

    let argsCode = "";

    // 需要解析参数结构
    for (let arg of importResult.args) {
        if (arg == '__default__') {
            argsCode += "var " + importResult.def + "=__nefbl_pack__scope_args__." + arg + ";\n";
        } else {
            argsCode += "var " + arg + "=__nefbl_pack__scope_args__." + arg + ";\n";
        }
    }

    return `__nefbl_pack__scope_args__=window.__nefbl_pack__getBundle('${urlToIndex(importResult.url)}');\n${argsCode}`;

};
