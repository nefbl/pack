const fs = require('fs');
const suffixArray = require('../config/suffix');

module.exports = function (filePath) {

    for (let suffix of ['', ...suffixArray]) {
        let _filePath = filePath + suffix;

        if (fs.existsSync(_filePath) && !fs.lstatSync(_filePath).isDirectory()) {
            let content = fs.readFileSync(_filePath, 'utf-8');

            return content;

        }
    }

    return null;
};
