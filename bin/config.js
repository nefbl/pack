module.exports = function (_process) {
    const nodejs = require('@hai2007/nodejs');

    // 获取命令行参数
    const parsed = nodejs.option({}, _process.argv);

    // 首先，获取配置文件
    let config = require(nodejs.fullPath(parsed.config[0], process.cwd()));

    return config;
};
