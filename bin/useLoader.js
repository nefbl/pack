let readFileSync = require('./modules/readFileSync');
let tool = require('@hai2007/tool');

module.exports = function (filepath, config) {

    let flag = false, content = "";

    for (let item of config.loader) {
        if (item.test.test(filepath)) {

            let handlers = item.handler;
            content = readFileSync(filepath);

            for (let index = handlers.length; index > 0; index--) {
                let handler = handlers[index - 1];
                let handlerFunction = tool.isFunction(handler) ? handler : require(handler);

                content = handlerFunction.call({

                    // 文件路径
                    filepath

                }, content);
            }

            flag = true;
            break;
        }
    }

    return {
        flag,
        content
    };
};
