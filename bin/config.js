const nodejs = require('@hai2007/nodejs');
const path = require('path');

module.exports = function (_process) {

    // 获取命令行参数
    const parsed = nodejs.option({}, _process.argv);

    // 首先，获取配置文件
    let config = require(nodejs.fullPath(parsed.config[0], process.cwd()));

    config.context = process.cwd();

    // 入口地址校对
    config.entry = {
        file: nodejs.fullPath(config.entry)
    };
    config.entry.context = path.dirname(config.entry.file);

    // 出口地址校对
    config.output = {
        file: nodejs.fullPath(config.output),
    };
    config.output.context = path.dirname(config.output.file);

    if (config.mode == 'development') {

        // 服务器校对
        config.devServer.contentBase = nodejs.fullPath(config.devServer.contentBase);

    }

    config.loader = config.loader || [];

    // javascript
    config.loader.push({
        test: /\.js$/,
        handler: [function (source) {
            return source;
        }]
    });

    return config;
};
