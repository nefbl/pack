
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/api.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('41');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('42');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-43901798":""},[createElement('header',{"id":"fixed-top","data-quickpaper-43901798":""},["接口"]),createElement('h2',{"id":"fixed-merge","data-quickpaper-43901798":""},["merge"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["const { merge } = require('@nefbl/pack');"]),createElement('p',{"data-quickpaper-43901798":""},["此方法主要用于合并配置文件。"]),createElement('p',{"data-quickpaper-43901798":""},["比如，开发和生产的配置可能存在一些差异，而大部分又是相同的，那么，就可以这样获取一份最终的配置文件："]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["const common = require('./pack.common.js');↵const { merge } = require('@nefbl/pack');↵↵module.exports = merge(common, {↵    mode: \"development\"↵});"]),createElement('p',{"data-quickpaper-43901798":""},["可以看到，在",createElement('span',{"class":"important","data-quickpaper-43901798":""},["./pack.common.js"]),"中配置公共的内容，通过合并的方式，在本文件中配置个性化的内容，比如标记",createElement('span',{"class":"important","data-quickpaper-43901798":""},["mode: \"development\""]),"表示是生产环境。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/api.paper?QuickPaper&type=script&lang=js&hash=43901798
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/api.paper?QuickPaper&type=style&lang=css&hash=43901798
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
