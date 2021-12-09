const nodejs = require('@hai2007/nodejs');
const path = require('path');
const tool = require('@hai2007/tool');
const getMainUrl = require('./tool/getMainUrl');
const fs = require('fs');
const babel = require('@babel/core');

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
    for (let i = 0; i < config.loader.length; i++) {
        for (let j = 0; j < config.loader[i].handler.length; j++) {

            let handler = config.loader[i].handler[j];
            if (!tool.isFunction(handler)) {

                let localFilePath = nodejs.fullPath(handler, process.cwd());

                // 如果不是配置的本地文件
                if (!fs.existsSync(localFilePath) || fs.lstatSync(localFilePath).isDirectory()) {

                    localFilePath = nodejs.fullPath('./node_modules/' + handler, process.cwd());

                    // 如果也不是node_modules中的路径
                    if (!fs.existsSync(localFilePath) || fs.lstatSync(localFilePath).isDirectory()) {

                        // 最终，采用main默认包
                        localFilePath = getMainUrl(localFilePath);

                    }

                }

                config.loader[i].handler[j] = require(localFilePath);

            }

        }
    }

    // javascript和typescript
    config.loader.push({
        test: /\.(ts|js)$/,
        handler: [function (source) {
            if (/node_modules/.test(this.filepath)) return source;

            return babel.transformFileSync(this.filepath, {
                "presets": [["@babel/preset-env", {

                    // 我不希望import这样的语句被转义
                    "modules": false

                }], "@babel/typescript"],
                "plugins": [

                    // 装饰器
                    ["@babel/plugin-proposal-decorators", {
                        "legacy": true
                    }],

                    // 类属性
                    "@babel/proposal-class-properties",

                    // 对象展开
                    "@babel/proposal-object-rest-spread"

                ]
            }).code;
        }]
    });

    // html
    config.loader.push({
        test: /\.html$/,
        handler: [function (source) {
            return "export default " + JSON.stringify(source);
        }]
    });

    // css和scss
    config.loader.push({
        test: /\.(css|scss)$/,
        handler: [function (source) {
            if (/\.scss$/.test(this.filepath)) {
                source = require('@hai2007/algorithm').scss(source);
            }
            return "export default " + JSON.stringify(source);
        }]
    });

    return config;
};
