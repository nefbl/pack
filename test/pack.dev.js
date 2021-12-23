const common = require('./pack.common.js');
const { merge } = require('../index');

module.exports = merge(common, {
    devServer: {
        contentBase: "./",
        port: 20001
    },
    mode: "development"
});
