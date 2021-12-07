/**
 * (function(){
 *  var bundle={}
 */

/**
 * bundle["__default__"]=function(){}
 */
export default function () {
    console.log('被调用了这个方法')
}

/**
 * bundle["doit1"]=function(){}
 */
export let doit1 = function (info) {
    console.log(1, info);
};

/**
 * bundle["info1"]='信息哦';
 */
export let info1 = '信息哦';

/**
 *
 * window.nefbl_pack_bundle[fullUrl]=bundle;
 *
 * })();
 *
 */
