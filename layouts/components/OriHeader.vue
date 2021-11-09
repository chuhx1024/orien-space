<template>
    <div class="clu-header" :class="{isMobile: isMobile}">
        <el-row type="flex" justify="space-around">
            <el-col :span="24">
                <header class="clu-header-container type-page">
                    <h1 class="logo" @click="toHomePage">
                        <svg class="icon logo-img" aria-hidden="true">
                            <!-- <use xlink:href="#Orien-LOGO" /> -->
                            <use xlink:href="#Orien-xingyunlogo" />
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
                                    active-text-color="#009dda"
                                    :mode="isMobile ? 'vertical' : 'horizontal'"
                                    menu-trigger="hover"
                                    :unique-opened="true"
                                    @select="selectHandle"
                                >
                                    <el-menu-item index="homePage">
                                        <nuxt-link class="nav-item" to="/">
                                            首页
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="servicePage">
                                        <nuxt-link class="nav-item" to="servicePage">
                                            服务
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="productPage">
                                        <nuxt-link class="nav-item" to="productPage">
                                            产品
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="newsPage">
                                        <nuxt-link class="nav-item" to="newsPage">
                                            新闻动态
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="joinPage">
                                        <nuxt-link class="nav-item" to="joinPage">
                                            加入我们
                                        </nuxt-link>
                                    </el-menu-item>
                                    <el-menu-item index="aboutPage">
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
                <info-entry />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'CluHeader',
    components: {
    },
    data () {
        return {
            logoSvg: { url: 'logo-light.svg', fit: 'contain' },
            showMenu: true,
            innerHeight: '',
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
        },
        getUrl () {
            const url = window.location.href
            const arrUrl = url.split('//')
            const start = arrUrl[1].indexOf('/')
            const relUrl = arrUrl[1].substring(start)
            return relUrl
        },
        toHomePage () {
            const Node = document.querySelectorAll('li[role="menuitem"]')
            const Node2 = document.querySelectorAll('.el-submenu__title')
            Node.forEach((item, index) => {
                if (index !== 0) {
                    item.style.borderBottomColor = 'transparent'
                    item.style.color = '#FFF'
                } else {
                    item.style.color = '#009dda'
                }
            })
            Node2.forEach((item) => {
                item.style.borderBottomColor = 'transparent'
                item.style.color = '#009dda'
            })
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
    },
}
</script>
<style lang='scss' scoped>
.clu-header {
    /deep/.el-menu.el-menu--horizontal {
        border-bottom: none;
        background-color: transparent;
    }

    /deep/.el-menu-item {
        background-color: transparent !important;
        height: 66px;
        line-height: 66px;
        border-bottom: none;

        &:first-child {
            padding-right: 27px;
        }

        &:hover {
            border-bottom: none;
            color: $--color-primary !important;
        }
    }

    /deep/.el-submenu {
        height: 66px;
        line-height: 66px;
    }

    /deep/.el-submenu__title {
        height: 66px;
        line-height: 66px;
        border-bottom: none !important;
    }

    /deep/.el-submenu__title {
        padding: 0 13px;
    }

    /deep/.el-submenu__title i {
        color: #1d2023;
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
                transform: scale(1.5) translateX(14px);
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
        }

        /deep/.el-submenu__title {
            height: auto;
            line-height: 43px;
            background-color: transparent !important;
            -webkit-tap-highlight-color: transparent;
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
