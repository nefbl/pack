// @nefbl/pack Bootstrap
// （ https://nefbl.github.io/pack/ ）

// 记录bundle的函数源码
window.__nefbl_pack__bundleSrc__ = {};

// 记录bundle的运行结果
window.__nefbl_pack__bundleObj__ = {};

// 获取bundle结果
window.__nefbl_pack__getBundle = function (bundleName) {

    // 一个bundle只有第一次导入的时候需要执行
    if (!(bundleName in window.__nefbl_pack__bundleObj__)) {
        window.__nefbl_pack__bundleObj__[bundleName] = window.__nefbl_pack__bundleSrc__[bundleName]();
    }

    // 返回需要的bundle的结果
    return window.__nefbl_pack__bundleObj__[bundleName];
}
