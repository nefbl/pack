/**
 * (function(){
 *  window.nefbl_pack_bundle[url]={}
 */

/**
 * window.nefbl_pack_bundle[url]["__default__"]=function(){}
 */
export default function () {
    console.log('被调用了这个方法')
}

/**
 * window.nefbl_pack_bundle[url]["doit1"]=function(){}
 */
export let doit1 = function (info) {
    console.log(1, info);
};

/**
 * window.nefbl_pack_bundle[url]["info1"]='信息哦';
 */
export let info1 = '信息哦';

/**
 *
 * })();
 *
 */
