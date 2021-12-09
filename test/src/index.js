import '@hai2007/style/normalize.css'

import '@hai2007/polyfill/Promise.js'

import Clunch from 'clunch/src/core/index';

import { doit1, info1 } from './tool'

doit1(info1)

console.log(Clunch);

import doit from './tool'

doit()

import info from './data/info'
console.log(info);

import image from './image.clunch';

console.log(image);
