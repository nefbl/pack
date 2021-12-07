module.exports = {

    // 打包入口
    entry: './src/index.js',

    // 打包出口
    output: 'build/main.js',

    // 配置对于特殊的文件如何解析
    loader: [{
        test: /\.css$/,
        handler: [function (source) {
            return "var styleElement = document.createElement('style');\n" +
                "var head = document.head || document.getElementsByTagName('head')[0];\n" +
                "styleElement.innerHTML = '" + source.replace(/\n/g, '\\n') + "';\n" +
                "styleElement.setAttribute('type', 'text/css');" +
                "head.appendChild(styleElement);";
        }]
    }]

};
