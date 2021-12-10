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
    window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/node_modules/@hai2007/style/normalize.css');

window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/node_modules/@hai2007/polyfill/Promise.js');

let {__default__:Clunch } = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/node_modules/clunch/src/core/index.js');

let {doit1,info1} = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/tool.js');

doit1(info1)

console.log(Clunch);

let {__default__:doit } = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/tool.js');

doit()

let {__default__:info } = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/data/info.json');
console.log(info);

let {__default__:image } = window.__nefbl_pack__getBundle('/Users/kapok/hai2007/nefbl/pack/test/src/image.clunch');

console.log(image);


// export default '你好呀';
return {};
}
window.__nefbl_pack__bundleSrc__['/Users/kapok/hai2007/nefbl/pack/test/src/index.js']();