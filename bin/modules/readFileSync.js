const fs = require('fs');

module.exports = function (filePath) {

    for (let suffix of ['', '.js', '.ts']) {
        let _filePath = filePath + suffix;
        if (fs.existsSync(_filePath) && !fs.lstatSync(_filePath).isDirectory()) {
            let content = fs.readFileSync(_filePath, 'utf-8');

            // 如果是json，需要额外封装一下
            if (/\.json$/.test(_filePath)) {
                content = "export default " + content;
            }

            return content;

        }
    }

    return null;
};
