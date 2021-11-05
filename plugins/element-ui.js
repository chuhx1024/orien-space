// element-ui.js
import Vue from 'vue'
import {
    Button,
    Input,
    Menu,
    Submenu,
    MenuItem,
    Row,
    Col,
    Tabs,
    TabPane,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../assets/css/cover-ele.scss'

const components = [
    Button,
    Input,
    Menu,
    Submenu,
    MenuItem,
    Row,
    Col,
    Tabs,
    TabPane,
]

const Element = {
    install (Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })
    },
}

Vue.use(Element, { locale })
