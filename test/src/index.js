import '@hai2007/style/normalize.css'

/**
 * nefbl_pack_getBundle(url).then(()=>{
 *      余下的代码
 * });
 */
import '@hai2007/polyfill/Promise.js'

/**
 * nefbl_pack_getBundle(url,"__default__").then((Clunch)=>{
 *      余下的代码
 * });
 */
import Clunch from 'clunch/src/core/index';

/**
 * nefbl_pack_getBundle(url,"doit1", "info1").then((doit1, info1)=>{
 *      余下的代码
 * });
 */
import { doit1, info1 } from './tool'

doit1(info1)

console.log(Clunch);

import doit from './tool'

doit()

import info from './data/info.json'
console.log(info);
