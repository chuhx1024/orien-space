<template>
    <section class="home-page-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="完成 4 亿天使轮融资"
            banner-btn="了解更多"
        >
            <p class="big">
                由经纬、红杉领头
            </p>
            <p class="big">
                三一重工、天赋资本、三江资本、SEE Fund等知名投资人跟投
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
        <div class="img-content">
            <img class="home-img" src="/img/index/index_1.png" alt="">
            <div class="btn-left" @click="goToHash('productPage', 'numberFirst')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_2.png" alt="">
            <div class="btn-left btn-right" @click="goToHash('productPage', 'numberSecond')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_3.png" alt="">
            <div class="btn-left" @click="goToHash('productPage', 'numberThird')" />
        </div>
        <div class="carouser-content">
            <carousel
                key="dfasdfasdf"
                :nav="false"
                :loop="true"
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
            font-size: 66px;
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
