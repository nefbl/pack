module.exports = function (importResult) {

    let args = "";
    for (let arg of importResult.args) {
        if (arg == '__default__') {
            args += arg + ":" + importResult.def + ",";
        } else {
            args += arg + ",";
        }
    }

    return `let {${args.replace(/\,$/, '')}} = window.__nefbl_pack__getBundle('${importResult.url}'');`;

};
