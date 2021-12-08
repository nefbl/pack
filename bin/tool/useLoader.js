const tool = require('@hai2007/tool');
const fs = require('fs');
const getFilePath = require('./getFilePath');

module.exports = function (filepath, config) {

    let content = null;
    filepath = getFilePath(filepath);

    for (let item of config.loader) {
        if (item.test.test(filepath)) {

            let handlers = item.handler;
            content = fs.readFileSync(filepath, 'utf-8');

            for (let index = handlers.length; index > 0; index--) {
                let handler = handlers[index - 1];
                let handlerFunction = tool.isFunction(handler) ? handler : require(handler);

                content = handlerFunction.call({

                    // 文件路径
                    filepath

                }, content);
            }
            break;
        }
    }

    return content;
};
