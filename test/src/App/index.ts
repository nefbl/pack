import { Component, ref } from 'nefbl'

import style from './index.scss'
import template from './index.html'

import pages from './lazy-load'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    page: any

    $setup() {
        return {
            param: ref('初始化的值'),
            page: ref(null)
        }
    }

    loadPage(event) {
        let page = pages["page" + event.target.getAttribute('tag')]
        page().then(data => {
            // console.log(data.default)
            // console.log(this)
            this.page = data.default
        })
    }

}
