import "@hai2007/style/normalize.css"

import '@hai2007/polyfill/Promise.js'

import Clunch from 'clunch/src/core/index';

console.log(Clunch);

import doit from './tool'

doit()

import info from './data/info.json'
console.log(info);
