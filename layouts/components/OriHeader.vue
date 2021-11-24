<template>
    <div ref="header" class="clu-header" :class="{isMobile: isMobile}">
        <el-row type="flex" justify="space-around">
            <el-col :span="24">
                <header class="clu-header-container type-page">
                    <h1 class="logo" @click="toHomePage">
                        <svg class="icon logo-img" aria-hidden="true">
                            <use xlink:href="#Orien-LOGO" />
                            <!-- <use xlink:href="#Orien-xingyunlogo" /> -->
                        </svg>
                    </h1>
                    <el-collapse-transition>
                        <template v-if="showMenu">
                            <section class="clu-header-nav">
                                <el-menu
                                    id="elMenu"
                                    ref="myMenu"
                                    :background-color="isMobile ? '#000' : 'transparent'"
                                    text-color="#fff"
                                    active-text-color="#f49e17"
                                    :mode="isMobile ? 'vertical' : 'horizontal'"
                                    menu-trigger="hover"
                                    :unique-opened="true"
                                    :default-active="$route.path"
                                    @select="selectHandle"
                                >
                                    <el-menu-item index="/">
                                        <nuxt-link class="nav-item" to="/">
                                            首页
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="/servicePage">
                                        <nuxt-link class="nav-item" to="/servicePage">
                                            服务
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-submenu index="/productPage">
                                        <template slot="title">
                                            <nuxt-link class="nav-item" to="/productPage">
                                                产品
                                            </nuxt-link>
                                        </template>
                                        <our-product-item @closeItem="closeItem" />
                                    </el-submenu>
                                    <el-menu-item index="/newsPage">
                                        <nuxt-link class="nav-item" to="newsPage">
                                            新闻动态
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="/joinPage">
                                        <nuxt-link class="nav-item" to="joinPage">
                                            加入我们
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="/aboutPage">
                                        <nuxt-link class="nav-item" to="aboutPage">
                                            关于我们
                                        </nuxt-link>
                                    </el-menu-item>
                                </el-menu>
                            </section>
                        </template>
                    </el-collapse-transition>
                    <template v-if="isMobile">
                        <div class="menu-icon" @click.stop="showMenuHandle">
                            <svg class="icon menu-icon-svg" aria-hidden="true">
                                <use xlink:href="#Orien-icon_threeline_fill" />
                            </svg>
                        </div>
                    </template>
                </header>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import OurProductItem from './OurProductItem'
export default {
    name: 'OriHeader',
    components: {
        OurProductItem,
    },
    data () {
        return {
            logoSvg: { url: 'logo-light.svg', fit: 'contain' },
            showMenu: true,
            innerHeight: '',
            activeItem: 'homePage',
        }
    },

    computed: {
        ...mapState('app', ['isMobile']),
    },

    watch: {
        isMobile (val) {
            this.showMenu = !val
            // 切换时移除绑定
            document.removeEventListener('click', this.checkClick)
        },
    },

    mounted () {
        this.innerHeight = window.innerHeight
        // this.scrollHandle()
        window.addEventListener('scroll', this.touthToBottomhandle)
        this.showMenu = !this.isMobile
    },

    methods: {

        showMenuHandle () {
            this.showMenu = !this.showMenu
            document.addEventListener('click', this.checkClick)
        },
        scroll (t) {
            window.scrollTo({
                top: t,
                behavior: 'smooth', // 平滑滚动
            })
        },
        // submenuHandle () {
        //     const Node = document.querySelectorAll('li[role="menuitem"]')
        //     Node.forEach((item) => {
        //         item.style.borderBottomColor = 'transparent'
        //         item.style.color = '#FFF'
        //         item.classList.remove('is-active')
        //     })
        //     this.$refs.productBtn.style.color = '#009dda'
        // },
        selectHandle (index) {
            if (this.isMobile) {
                this.showMenu = false
            }

            if (this.$refs[index]) {
                if (document.getElementById(index)) {
                    window.scroll({
                        top: document.getElementById(index).offsetTop - 46,
                        behavior: 'smooth',
                    })
                } else {
                    this.$router.push(this.$i18n.path(''), () => {
                        setTimeout(() => {
                            window.scroll({
                                top: document.getElementById(index).offsetTop - 46,
                                behavior: 'smooth',
                            })
                        }, 500)
                    })
                }
            }
            // const Node = document.querySelectorAll('li[role="menuitem"]')
            // const menuArr = ['homePage', 'servicePage', 'productPage', 'newsPage', 'joinPage', 'aboutPage']
            // Node.forEach((item, subIndex) => {
            //     if (menuArr[subIndex] !== index) {
            //         item.style.borderBottomColor = 'transparent'
            //         item.style.color = '#FFF'
            //         item.classList.remove('is-active')
            //     } else {
            //         item.classList.add('is-active')
            //         item.style.color = '#009dda'
            //     }
            // })
            // this.$refs.productBtn.style.color = '#FFF'
        },
        getUrl () {
            const url = window.location.href
            const arrUrl = url.split('//')
            const start = arrUrl[1].indexOf('/')
            const relUrl = arrUrl[1].substring(start)
            return relUrl
        },
        toHomePage () {
            // this.$refs.productBtn.style.color = '#FFF'
            // const Node = document.querySelectorAll('li[role="menuitem"]')
            // // const Node2 = document.querySelectorAll('.el-submenu__title')
            // Node.forEach((item, index) => {
            //     if (index !== 0) {
            //         item.style.borderBottomColor = 'transparent'
            //         item.style.color = '#FFF'
            //         item.classList.remove('is-active')
            //     } else {
            //         item.classList.add('is-active')
            //         item.style.color = '#009dda'
            //     }
            // })
            // // Node2.forEach((item) => {
            // //     item.style.borderBottomColor = 'transparent'
            // //     item.style.color = '#009dda'
            // // })
            const url = this.getUrl()
            if (url === '/' || url === '/en/' || url === 'zh') {
                window.scroll({
                    top: 0,
                    behavior: 'smooth',
                })
            } else {
                this.$router.push('/')
            }
        },
        checkClick () {
            const dom = document.querySelector('#elMenu')
            if (!dom.contains(event.target)) {
                this.showMenu = false
                return false
            }
        },
        closeItem (index) {
            this.$refs.myMenu.close(index)
            if (this.isMobile) {
                this.showMenu = false
            }
        },
        scrollHandle () {
            // // 兼容性写法，该函数也是网上别人写的，不过找不到出处了，蛮好的，所有我也没有必要修改了
            // // 判断鼠标滚轮滚动方向
            // if (window.addEventListener) { // FF,火狐浏览器会识别该方法
            //     window.addEventListener('DOMMouseScroll', wheel, false)
            //     window.onmousewheel = document.onmousewheel = wheel// W3C
            // }
            // // 统一处理滚轮滚动事件
            // function wheel (event) {
            //     let delta = 0
            //     if (!event) { event = window.event }
            //     if (event.wheelDelta) { // IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
            //         delta = event.wheelDelta / 120
            //         if (window.opera) { delta = -delta }// 因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
            //     } else if (event.detail) { // FF浏览器使用的是detail,其值为“正负3”
            //         delta = -event.detail / 3
            //     }
            //     if (delta) { handle(delta) }
            // }
            // // 上下滚动时的具体处理函数
            // function handle (delta) {
            //     if (delta < 0) { // 向下滚动
            //         console.log(123)
            //         console.log(delta)
            //     } else { // 向上滚动
            //         console.log(345)
            //     }
            // }
            // 页面滚动到底部触发的事件
        },
        touthToBottomhandle () {
            // 滚动条滚动时，距离顶部的距离
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop === 0) {
                this.$refs.header.style.backgroundColor = 'transparent'
            } else {
                this.$refs.header.style.backgroundColor = '#000'
            }
        },
    },
}
</script>
<style lang='scss' scoped>
.clu-header {
    transition: 3s background-color;

    /deep/.el-menu.el-menu--horizontal {
        border-bottom: none;
        background-color: transparent;
    }

    /deep/.el-menu-item {
        background-color: transparent !important;
        height: 66px;
        line-height: 66px;
        padding: 0 32px;
        border-bottom: none;

        &:last-child {
            padding-right: 0;
        }

        &:hover {
            border-bottom: none;
            color: $--color-primary !important;
        }
    }

    /deep/.el-submenu__icon-arrow {
        display: none;
    }

    /deep/.el-submenu {
        height: 66px;
        line-height: 66px;
        // padding: 0 35px 0 18px;
        padding: 0 32px;
    }

    /deep/.el-submenu__title {
        height: 66px;
        line-height: 66px;
        padding: 0 !important;
        border-bottom: none !important;
    }

    /deep/.el-submenu__title {
        padding: 0 13px;
    }

    /deep/.el-submenu__title i {
        color: #fff;
        margin-top: 6px;
    }

    /deep/.el-submenu .el-submenu__title:hover {
        border-bottom: none;
        background-color: transparent !important;
        color: $--color-primary !important;

        i {
            color: $--color-primary;
        }
    }

    /deep/.el-button {
        background-color: $--color-primary;
        color: #fff;
    }

    /deep/.el-menu--horizontal > .el-menu-item.is-active {
        border: none !important;
        font-weight: 600;
    }

    /deep/.el-menu--horizontal > .el-submenu.is-active {
        font-weight: 600;
    }

    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.11);
    width: 100%;
    height: 66px;
    z-index: 999;

    .clu-header-container {
        display: flex;
        height: 66px;
        padding-left: 22px;
        padding-right: 22px;
        justify-content: space-between;

        .logo {
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;

            .logo-img {
                transform: scale(1.5) translateX(10px);
                height: 28px;
                font-size: 90px;
            }
        }

        .menu-icon {
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-tap-highlight-color: transparent;

            .menu-icon-svg {
                font-size: 30px;
                color: $--color-primary;
            }
        }

        .nav-item {
            display: inline-block;
            height: 100%;
            width: 100%;
            line-height: 63px;
        }
    }

    &.isMobile {
        /deep/.el-menu {
            max-height: calc(100vh - 66px);
            overflow: auto;
        }

        /deep/.el-menu-item {
            height: auto;
            line-height: 43px;
            padding: 0 5px;
        }

        /deep/.el-submenu {
            height: auto;
            line-height: 43px;
            padding-right: 30px;
            padding-left: 20px;
        }

        /deep/.el-submenu__title {
            height: auto;
            line-height: 43px;
            padding-left: 0 !important;
            background-color: transparent !important;
            -webkit-tap-highlight-color: transparent;
        }

        /deep/.el-submenu__icon-arrow {
            margin: 0;
        }

        /deep/.el-submenu .el-submenu__title:hover {
            border-bottom: $--color-primary solid 2px !important;
            background-color: transparent !important;
            color: $--color-primary !important;

            i {
                color: $--color-primary;
            }
        }

        /deep/.el-menu-item {
            background-color: transparent !important;
            -webkit-tap-highlight-color: transparent;

            &:hover {
                border-bottom: $--color-primary solid 2px !important;
                background-color: transparent !important;
                color: $--color-primary !important;
            }
        }

        /deep/.el-button {
            padding: 10px;
            margin-right: 15px;
        }

        .clu-header-nav {
            position: absolute;
            top: 66px;
            left: -5px;
            width: 103%;

            /deep/.el-menu {
                border-right: none;
            }
        }

        .clu-header-container {
            .logo {
                .logo-img {
                    width: 80px;
                    height: 28px;
                    transform: scale(1.4);
                    padding-left: 15px;
                }
            }

            .menu-icon {
                width: 35px;
                padding-left: 30px;

                .menu-icon-svg {
                    font-size: 24px;
                }
            }

            .nav-item {
                line-height: 43px;
            }
        }
    }

    .mobile-sign {
        position: absolute;
        right: 10px;
        padding-right: 15px;
        background-color: #fff;
        font-size: 12px;
        z-index: 20;
    }
}
</style>
