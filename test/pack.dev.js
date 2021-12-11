const common = require('./pack.common.js');
const { merge } = require('../index');

module.exports = merge(common, {
    devServer: {
        contentBase: "./",
        port: 20000
    },
    mode: "development"
});
