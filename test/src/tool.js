
export default function () {
    console.log('被调用了这个方法')
}

export let doit1 = function (info) {
    console.log(1, info);
};

export let info1 = '信息哦';


import {ref} from 'nefbl';

console.log(ref);
