const fs = require('fs');
const getDistUrl = require('./getDistUrl');
const nodejs = require('@hai2007/nodejs');
const useLoader = require('../useLoader');
const analyseImport = require('./analyseImport');

module.exports = function (sourceFullUrl, config) {

    // 记录一个bundle是否已经打包
    let bundle = [];
    let url = getDistUrl(sourceFullUrl, config);

    (function analyseContent(sourceFullUrl, url) {

        // 如果已经打包，就无需再整理了
        if (bundle[sourceFullUrl]) return;
        bundle[sourceFullUrl] = true;

        // 读取当前需要解析的bundle原始内容
        let source = useLoader(sourceFullUrl, config).content;

        console.log(source);

        let code = `(function(window,undefined){

    window.nefbl_pack_bundle['${url}']={};

`;

        // 导入语句
        let execStatement = null, splitHelp = '/*【@nefbl/pack/split】*/';
        while (execStatement = /import[^'"]*(['|"]).+\1/.exec(source)) {
            let sourceArray = source.replace(/import[^'"]*(['|"]).+\1/, splitHelp).split(splitHelp);

            let importObj = analyseImport(execStatement[0]);

            source = sourceArray[0] + `window.nefbl_pack_getBundle(${importObj.url},${importObj.args_str}).then(function(${importObj.args}){
    ${sourceArray[1]}
});`

            // console.log(execStatement[0], sourceArray);


        }

        // 导出语句
        /**
         * export default
         * export [let|var|const|function...]
         */

        code += "\n\n" + source + "\n\n";

        code += `})(window);`;

        // 写入bundle文件
        fs.writeFileSync(nodejs.fullPath(url, config.context), code);

    })(sourceFullUrl, url);

    return `window.nefbl_pack_getBundle('${url}');`;

};
