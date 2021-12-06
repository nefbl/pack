module.exports = function (source) {
    return source.replace(/(import [^'"]*)(['|"])([^./].+)\2/g, '$1$2/@modules/$3$2');
};
