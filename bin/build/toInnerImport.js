module.exports = function (importResult) {

    let argsCode = "";

    // 需要解析参数结构
    if (importResult.args.length != 0) {

        let args = "";
        for (let arg of importResult.args) {
            if (arg == '__default__') {
                args += arg + ":" + importResult.def + ",";
            } else {
                args += arg + ",";
            }
        }

        argsCode = `let {${args.replace(/\,$/, '')}} = `;

    }

    return `${argsCode}window.__nefbl_pack__getBundle('${importResult.url}');`;

};
