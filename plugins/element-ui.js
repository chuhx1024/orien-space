// element-ui.js
import Vue from 'vue'
import {
    Button,
    Input,
    Menu,
    Submenu,
    MenuItem,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
    Button,
    Input,
    Menu,
    Submenu,
    MenuItem,
]

const Element = {
    install (Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })
    },
}

Vue.use(Element, { locale })
