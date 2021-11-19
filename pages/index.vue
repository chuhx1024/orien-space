<template>
    <section class="home-page-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="完成 4 亿天使轮融资"
            banner-btn="了解更多"
        >
            <p class="big">
                由经纬中国、红杉中国领投
            </p>
            <p class="big">
                三一集团、天赋资本、三江资本、SEE Fund等知名基金跟投
            </p>
        </banner-com>
        <light-beam />
        <div class="home-title" :class="{isMobile: isMobile}">
            <p class="desc">
                让空间触手可及
            </p>
            <p class="mark">
                — &nbsp;&nbsp;姚颂
            </p>
        </div>
        <div class="img-container">
            <img class="wallpaper" src="/img/index/index_11.png" alt="">
            <section class="text-wallpaper">
                <section v-if="!isMobile" class="text-content type-page">
                    <h2 class="main-title-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#Orien-yinli-1-copy" />
                        </svg>
                    </h2>
                    <div class="text-desc">
                        <p>创新的大型捆绑设计，兼具稳定的性能与极强运载能力，针对</p>
                        <p>多种发射场景海陆兼容的设计，持续提升服务能力，使引力1</p>
                        <p>号成为商业发射的极佳选择</p>
                    </div>
                    <div class="text-btn">
                        <el-button type="primary" plain @click="goToHash('productPage', 'numberFirst')">
                            了解更多
                        </el-button>
                    </div>
                </section>
                <section v-else class="text-content-mobile">
                    <h2 class="main-title-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#Orien-yinli-1-copy" />
                        </svg>
                    </h2>
                    <div class="text-desc">
                        <p>创新的大型捆绑设计，兼具稳定的性能与极强运载能力，针对多种发射场景海陆兼容的设计，持续提升服务能力，使引力1号成为商业发射的极佳选择</p>
                    </div>
                    <div class="text-btn">
                        <el-button type="primary" plain @click="goToHash('productPage', 'numberFirst')">
                            了解更多
                        </el-button>
                    </div>
                </section>
            </section>
        </div>
        <div class="img-container">
            <img class="wallpaper" src="/img/index/index_22.png" alt="">
            <section class="text-wallpaper">
                <section v-if="!isMobile" class="text-content type-page text-align-right">
                    <h2 class="main-title-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#Orien-yinli-2-copy" />
                        </svg>
                    </h2>
                    <div class="text-desc">
                        <p>实现将固体大推力助推器与液体芯级相结合设计，使引力2号满足更</p>
                        <p>高轨道发射需求，实现部分回收，重复使用。</p>
                    </div>
                    <div class="text-btn">
                        <el-button type="primary" plain @click="goToHash('productPage', 'numberSecond')">
                            了解更多
                        </el-button>
                    </div>
                </section>
                <section v-else class="text-content-mobile text-align-right">
                    <h2 class="main-title-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#Orien-yinli-2-copy" />
                        </svg>
                    </h2>
                    <div class="text-desc">
                        <p>实现将固体大推力助推器与液体芯级相结合设计，使引力2号满足更高轨道发射需求，实现部分回收，重复使用。</p>
                    </div>
                    <div class="text-btn">
                        <el-button type="primary" plain @click="goToHash('productPage', 'numberSecond')">
                            了解更多
                        </el-button>
                    </div>
                </section>
            </section>
        </div>
        <div class="img-container">
            <img class="wallpaper" src="/img/index/index_33.png" alt="">
            <section class="text-wallpaper">
                <section v-if="!isMobile" class="text-content type-page">
                    <h2 class="main-title-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#Orien-yinli-3-copy" />
                        </svg>
                    </h2>
                    <div class="text-desc">
                        <p>在实现极大运载能力的同时，引力3号可支持海上回收</p>
                    </div>
                    <div class="text-btn">
                        <el-button type="primary" plain @click="goToHash('productPage', 'numberThird')">
                            了解更多
                        </el-button>
                    </div>
                </section>
                <section v-else class="text-content-mobile">
                    <h2 class="main-title-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#Orien-yinli-3-copy" />
                        </svg>
                    </h2>
                    <div class="text-desc">
                        <p>在实现极大运载能力的同时，引力3号可支持海上回收</p>
                    </div>
                    <div class="text-btn">
                        <el-button type="primary" plain @click="goToHash('productPage', 'numberThird')">
                            了解更多
                        </el-button>
                    </div>
                </section>
            </section>
        </div>
        <div class="carouser-content">
            <carousel
                key="dfasdfasdf"
                :nav="false"
                :loop="true"
                :autoplay-timeout="4000"
                :autoplay="true"
                :items="1"
                :dots="false"
            >
                <div
                    v-for="(item, index) in carouselData"
                    :key="index"
                    class="carouser-card"
                >
                    <img class="wallpaper" :src="item.url" alt="">
                    <div class="carousel-title">
                        {{ item.title }}
                    </div>
                </div>
            </carousel>
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_gif.gif" alt="">
        </div>
        <!-- <div class="home-dese">
            <p class="text-content type-page" :class="{isMobile: isMobile}">
                东方空间由资深航天技术团队与成功科技创业者联合创办，旨在帮助人类拓展发展空间，让更多人享受太空新文明，有效补充全球航天发射能力。公司以现代化科技公司管理模式，严谨、敏捷、协作的精神，希望探索出全新的高效率航天技术发展范式。
                <span class="mark"> — 姚颂</span>
            </p>
        </div> -->
    </section>
</template>

<script>
import { mapState } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
import { goToHash } from '@/utiles/tool.js'
export default {
    name: 'HomePage',
    components: { BannerCom },
    data () {
        return {
            carouselData: [
                { title: '我们为什么发射火箭', url: '/img/index/carouse_0.jpg' },
                { title: '通信', url: '/img/index/carouse_1.jpg' },
                { title: '气象变化', url: '/img/index/carouse_2.jpg' },
                { title: '遥感', url: '/img/index/carouse_3.jpg' },
                { title: '导航', url: '/img/index/carouse_4.jpg' },
            ],
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        goToHash (path, hash) {
            goToHash.call(this, path, hash)
        },
    },
}
</script>
<style lang='scss' scoped>
.home-page-container {
    .img-content {
        position: relative;

        .btn-left {
            position: absolute;
            top: 33%;
            left: 7%;
            width: 29%;
            height: 34%;
            // border: 1px solid #ccc;
            cursor: pointer;
        }

        .btn-right {
            left: 64%;
            top: 30%;
        }

        .home-img {
            width: 100%;
            background-size: cover;
        }
    }

    .img-container {
        position: relative;
        line-height: 1;

        .wallpaper {
            width: 100%;
            background-size: cover;
        }

        .text-wallpaper {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            .text-content {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: left;

                .main-title-icon {
                    font-size: 120px;
                    color: #fff;
                    margin-bottom: -28px;
                }

                .text-desc {
                    font-size: 16px;
                    color: #c9caca;
                    line-height: 24px;
                }

                .text-btn {
                    padding-top: 35px;
                }
            }

            .text-content-mobile {
                padding-left: 15px;
                padding-right: 15px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: left;

                .main-title-icon {
                    font-size: 36px;
                    color: #fff;
                }

                .text-desc {
                    font-size: 12px;
                    color: #c9caca;
                    line-height: 17px;

                    p {
                        display: inline-block;
                        width: 50%;
                    }
                }

                .text-btn {
                    padding-top: 20px;
                    color: pink;
                }
            }

            .text-align-right {
                text-align: right;
            }
        }
    }

    .home-title {
        background-color: #000;
        text-align: center;
        color: #fff;

        .desc {
            font-size: 3rem;
            line-height: 3rem;
            padding-bottom: 2.3rem;
        }

        .mark {
            font-size: 1.7rem;
            line-height: 3.2rem;
            padding-bottom: 3.8rem;
        }
    }

    .carouser-content {
        position: relative;
        background-color: #000;

        /deep/.owl-theme .owl-dots .owl-dot.active span, /deep/.owl-theme .owl-dots .owl-dot:hover span {
            background: $--color-primary;
        }

        /deep/.owl-dots {
            margin-top: 47px;
        }

        .wallpaper {
            width: 100%;
            background-size: cover;
        }

        .carousel-title {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 3rem;
        }
    }

    .home-dese {
        background-color: #000;
        padding: 50px 0 100px;

        .text-content {
            font-size: 17px;
            font-weight: 400;
            color: #fff;
            line-height: 32px;
            position: relative;

            .mark {
                position: absolute;
                right: 10px;
                bottom: 0;
            }

            &.isMobile {
                padding: 0 15px;

                .mark {
                    right: 30px;
                }
            }
        }
    }
}

</style>
