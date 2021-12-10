/******/
/******/  // @nefbl/pack Bootstrap
/******/  // （ https://nefbl.github.io/pack/ ）
/******/  
/******/  // 记录bundle的函数源码
/******/  window.__nefbl_pack__bundleSrc__ = {};
/******/  
/******/  // 记录bundle的运行结果
/******/  window.__nefbl_pack__bundleObj__ = {};
/******/  
/******/  // 获取bundle结果
/******/  window.__nefbl_pack__getBundle = function (bundleName) {
/******/  
/******/      // 一个bundle只有第一次导入的时候需要执行
/******/      if (!(bundleName in window.__nefbl_pack__bundleObj__)) {
/******/          window.__nefbl_pack__bundleObj__[bundleName] = window.__nefbl_pack__bundleSrc__[bundleName]();
/******/      }
/******/  
/******/      // 返回需要的bundle的结果
/******/      return window.__nefbl_pack__bundleObj__[bundleName];
/******/  }
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
window.__nefbl_pack__bundleSrc__['/Users/kapok/hai2007/nefbl/pack/test/node_modules/@hai2007/style/normalize.css']=function(){
    let __nefbl_pack__scope_bundle__={};
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = '/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n';
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
    return __nefbl_pack__scope_bundle__;
}
/*************************** [bundle] ****************************/
window.__nefbl_pack__bundleSrc__['/Users/kapok/hai2007/nefbl/pack/test/src/tool.js']=function(){
    let __nefbl_pack__scope_bundle__={};
    
__nefbl_pack__scope_bundle__.__default__= function () {
    console.log('被调用了这个方法')
}

__nefbl_pack__scope_bundle__.doit1 = function (info) {
    console.log(1, info);
};

__nefbl_pack__scope_bundle__.info1 = '信息哦';


// import { ref } from 'nefbl';

// console.log(ref);

    return __nefbl_pack__scope_bundle__;
}
/*************************** [bundle] ****************************/
window.__nefbl_pack__bundleSrc__['/Users/kapok/hai2007/nefbl/pack/test/src/index.js']=function(){
    let __nefbl_pack__scope_bundle__={};
    window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/node_modules/@hai2007/style/normalize.css');

// import '@hai2007/polyfill/Promise.js'

// import Clunch from 'clunch/src/core/index';

let {doit1,info1} = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/tool.js');

doit1(info1)

// console.log(Clunch);

let {__default__:doit } = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/tool.js');

doit()

// import info from './data/info'
// console.log(info);

// import image from './image.clunch';

// console.log(image);

__nefbl_pack__scope_bundle__.__default__= '你好呀';
__nefbl_pack__scope_bundle__.key = '1';
__nefbl_pack__scope_bundle__.doit=function() {
    // todo
}

__nefbl_pack__scope_bundle__.doit1 = function () {

};


    return __nefbl_pack__scope_bundle__;
}
window.__nefbl_pack__bundleSrc__['/Users/kapok/hai2007/nefbl/pack/test/src/index.js']();