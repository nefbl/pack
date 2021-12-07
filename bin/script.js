/**
 * ************************* @nefbl/pack ********************
 * **********************************************************
 * **********************************************************
 * ***********用于提供一些基础的辅助等方法**************
 * **********************************************************
 * **********************************************************
 * ***************************** begin **********************
 */

window.nefbl_pack_bundle = window.nefbl_pack_bundle || {};

// 模块加载
function nefbl_pack_getFile(url) {
    return new Promise(function (resolve) {

        // 如果加载过了
        if (window.nefbl_pack_bundle[url]) resolve(window.nefbl_pack_bundle[url]);

        else {

            // 获取head标签
            var head = document.getElementsByTagName('head')[0];

            // 创建script
            var script = document.createElement('script');

            // 设置属性
            script.src = url;

            // 追加到页面
            head.appendChild(script);

            script.addEventListener('load', function () {
                // 模块会自己添加到 window.nefbl_pack_bundle
                resolve(window.nefbl_pack_bundle[url]);
            }, false);

        }
    });
}

window.nefbl_pack_getBundle = function (url) {

    var params = arguments;

    return new Promise(function (resolve) {

        nefbl_pack_getFile(url).then(function (bundle) {

            var args = [], index;
            for (index = 1; index < params.length; index++) {
                args.push(bundle[params[index]]);
            }

            // 执行
            resolve.apply({}, args);

        });

    });
}

/***************************** end ***************************/
