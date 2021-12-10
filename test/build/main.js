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
/******/          window.__nefbl_pack__bundleObj__[bundleName] = window.__nefbl_pack__bundleSrc__[bundleName];
/******/      }
/******/  
/******/      // 返回需要的bundle的结果
/******/      return window.__nefbl_pack__bundleObj__[bundleName];
/******/  }
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
window.__nefbl_pack__bundleSrc__['/Users/kapok/hai2007/nefbl/pack/test/src/index.js']=function(){
    let __nefbl_pack__scope_bundle__={};
    // import '@hai2007/style/normalize.css'

// import '@hai2007/polyfill/Promise.js'

// import Clunch from 'clunch/src/core/index';

let {doit1,info1} = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/tool.js');

doit1(info1)

console.log(Clunch);

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