import { Component, ref } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    $setup() {
        return {
            param: ref('初始化的值')
        }
    }

}
