<template>
    <section class="home-page-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="东方空间完成4亿天使轮系列融资"
            banner-btn="了解更多"
        >
            <p class="big">
                东方空间天使轮由经纬、红杉，三一
            </p>
            <p class="big">
                重工天赋三江资本、SEE Fund等知名企业家
            </p>
            <p class="big">
                与投资人跟投
            </p>
        </banner-com>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_1.jpg" alt="">
            <div class="btn-left" @click="goToHash('productPage', 'numberFirst')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_2.jpg" alt="">
            <div class="btn-left btn-right" @click="goToHash('productPage', 'numberSecond')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_3.jpg" alt="">
            <div class="btn-left" @click="goToHash('productPage', 'numberThird')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/index/index_4.jpg" alt="">
            <div class="btn-left" @click="goToHash" />
        </div>
        <div class="home-dese">
            <p class="text-content type-page" :class="{isMobile: isMobile}">
                东方空间由资深航天技术团队与成功科技创业者联合创办，旨在帮助人类拓展发展空间，让更多人享受太空新文明，有效补充全球航天发射能力。公司以现代化科技公司管理模式，严谨、敏捷、协作的精神，希望探索出全新的高效率航天技术发展范式。
                <span class="mark"> — 姚颂</span>
            </p>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
import { goToHash } from '@/utiles/tool.js'
export default {
    name: 'HomePage',
    components: { BannerCom },
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
    color: pink;

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
