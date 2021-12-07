(function(window,undefined){

    window.nefbl_pack_bundle['./build/index@bundle.js']={};



window.nefbl_pack_getBundle('@hai2007/style/normalize.css',).then(function(){
    

/**
 * nefbl_pack_getBundle(url).then(()=>{
 *      余下的代码
 * });
 */
window.nefbl_pack_getBundle('@hai2007/polyfill/Promise.js',).then(function(){
    

/**
 * nefbl_pack_getBundle(url,"__default__").then((Clunch)=>{
 *      余下的代码
 * });
 */
window.nefbl_pack_getBundle( 'clunch/src/core/index',"__default__").then(function(__default__){
    ;

/**
 * nefbl_pack_getBundle(url,"doit1", "info1").then((doit1, info1)=>{
 *      余下的代码
 * });
 */
window.nefbl_pack_getBundle( './tool',"doit1","info1").then(function(doit1,info1){
    

doit1(info1)

console.log(Clunch);

window.nefbl_pack_getBundle( './tool',"__default__").then(function(__default__){
    

doit()

window.nefbl_pack_getBundle( './data/info.json',"__default__").then(function(__default__){
    
console.log(info);

});
});
});
});
});
});

})(window);