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

window.__nefbl_pack__bundleFile__ = {};

// 获取懒加载bundle结果
window.__nefbl_pack__getLazyBundle = function (fileName, bundleName) {
    return new Promise(function (resolve) {

        // 如果加载过了
        if (window.__nefbl_pack__bundleFile__[fileName]) {
            resolve(window.__nefbl_pack__getBundle(bundleName));
            return;
        }

        // 获取head标签
        var head = document.getElementsByTagName('head')[0];

        // 创建script
        var script = document.createElement('script');

        // 设置属性
        script.src = fileName;

        // 追加到页面
        head.appendChild(script);

        window.__nefbl_pack__bundleFile__[fileName] = true;

        script.addEventListener('load', function () {
            resolve(window.__nefbl_pack__getBundle(bundleName));
        }, false);


    });
}
