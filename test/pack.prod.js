const common = require('./pack.common.js');
const { merge } = require('../index');

module.exports = merge(common, {
    mode: "production",
    min: true
});
