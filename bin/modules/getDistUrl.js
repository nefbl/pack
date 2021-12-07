module.exports = function (fullUrl, config) {
    let url = fullUrl.replace(config.entry.context, config.output.context).replace(config.context, '.').replace(/\.js$/, '@bundle.js');

    // 有时候深路径会出错，需要兼容

    return url;
};
