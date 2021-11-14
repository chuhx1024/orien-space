<template>
    <section class="service-page-container">
        <banner-com-small
            url-source="/img/service/service_banner.png"
            main-title="Are you ready to go universe？"
        >
            <p class="big" style="color: #fff;">
                你准备好出发去太空了吗？
            </p>
        </banner-com-small>
        <div class="service-title" :class="{isMobile: isMobile}">
            <p class="desc">
                太空物流
            </p>
            <p class="mark">
                使用“引力”系列运载火箭，打造系列化、多样化的空天运输产品，为您提供低成本、规模化、高效快捷的。
            </p>
            <p class="mark">
                发射服务，覆盖LEO、SSO等各类型轨道
            </p>
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/service/service_0.jpg" alt="">
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/service/service_1.jpg" alt="">
            <div class="btn-left" @click="goToHash('productPage', 'numberSecond')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/service/service_2.jpg" alt="">
            <div class="btn-left btn-right" @click="goToHash('productPage', 'numberSecond')" />
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/service/service_3.jpg" alt="">
            <div class="btn-left" @click="goToHash('productPage', 'numberSecond')" />
        </div>
        <div class="carouser-content">
            <carousel
                key="dfasdfasdf"
                :nav="false"
                :loop="true"
                :autoplay-timeout="3000"
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
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerComSmall from '../components/BannerComSmall.vue'
export default {
    name: 'ServicePage',
    components: { BannerComSmall },
    data () {
        return {
            carouselData: [
                { title: '太空旅行', url: '/img/service/carouse_0.png' },
                { title: '太空旅行', url: '/img/service/carouse_1.png' },
                { title: '太空旅行', url: '/img/service/carouse_2.png' },
            ],
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
    },
}
</script>
<style lang='scss' scoped>
    .service-page-container {
        .service-title {
            background-color: #000;
            text-align: center;
            color: #fff;
            padding-top: 8rem;

            .desc {
                font-size: 3.3rem;
                line-height: 3.3rem;
                padding-bottom: 2.3rem;
            }

            .mark {
                font-size: 1.7rem;
                line-height: 3.2rem;
                padding-bottom: 3.8rem;
            }
        }

        .img-content {
            position: relative;

            .btn-left {
                position: absolute;
                top: 33%;
                left: 7%;
                width: 31%;
                height: 50%;
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

        .carouser-content {
            position: relative;
            background-color: #000;
            padding-bottom: 80px;

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
                font-size: 6.6rem;
            }
        }
    }

</style>
