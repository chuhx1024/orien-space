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
    Timeline,
    TimelineItem,
    Collapse,
    CollapseItem,
} from 'element-ui'

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
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
    CollapseTransition,
    Timeline,
    TimelineItem,
    Collapse,
    CollapseItem,
]

const Element = {
    install (Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })
    },
}

Vue.use(Element, { locale })
