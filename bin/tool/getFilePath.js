const fs = require('fs');
const suffixArray = require('../config/suffix');

module.exports = function (filePath) {

    for (let suffix of ['', ...suffixArray]) {
        let _filePath = filePath + suffix;

        if (fs.existsSync(_filePath) && !fs.lstatSync(_filePath).isDirectory()) {
            return _filePath;

        }
    }

    return null;
};
