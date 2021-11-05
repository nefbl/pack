const pkg = JSON.parse(require('fs').readFileSync('./package.json'));

module.exports = {

    // 打包入口
    entry: './src/index.js',

    // 打包出口
    output: 'build/main@v' + pkg.version + '.js',

    // 配置对于特殊的文件如何解析
    loader: [{
        test: /\.css$/,
        handler(source) {

        }
    }]

};
