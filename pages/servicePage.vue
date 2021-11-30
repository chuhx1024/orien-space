<template>
    <section class="service-page-container">
        <banner-com-small
            url-source="/img/service/service_banner.jpg"
            main-title="您准备好出发去太空了吗？"
        >
            <!-- <p class="big" style="color: #fff;">
                你准备好出发去太空了吗？
            </p> -->
        </banner-com-small>
        <div id="serviceTitle" class="service-title" :class="{isMobile}">
            <p class="desc">
                太空物流
            </p>
            <p class="mark">
                全球一小时抵达
            </p>
            <p class="mark-0">
                使用“引力”系列运载火箭，打造系列化、多样化的空天运输产品，为您提供低成本、规模化、高效快捷的
            </p>
            <p class="mark-0">
                发射服务，覆盖LEO、SSO、GTO、GEO等各类型轨道
            </p>
        </div>
        <div class="img-content">
            <img class="home-img" src="/img/service/service_0.jpg" alt="">
        </div>
        <div class="img-container" style="background-color: #040a17; padding: 148px 0;">
            <img class="wallpaper left" :class="{isMobile}" src="/img/service/service_1.png" alt="">
            <section class="text-wallpaper" :class="{isMobile}">
                <section class="text-content type-page">
                    <div class="main-title-0">
                        使命必达
                    </div>
                    <div class="text-desc">
                        通过多样化构型，将各类载荷准确送至太空预定轨道
                    </div>
                    <div class="main-title-1">
                        灵活发射
                    </div>
                    <div class="text-desc">
                        通过陆地、海洋等多种方式灵活发射可实现海上自主回收
                    </div>
                    <div class="text-btn">
                        <el-button :size="isMobile? 'mini': 'medium'" type="primary" plain @click="gotoMail('bd@orienspace.com')">
                            预约发射
                        </el-button>
                    </div>
                </section>
            </section>
        </div>
        <div id="serviceCoop" class="img-container" style="background-color: #000; padding: 45px 0;">
            <img class="wallpaper right" src="/img/service/service_22.gif" alt="">
            <section class="text-wallpaper" :class="{isMobile}">
                <section class="text-content type-page text-align-right">
                    <div class="main-title-0">
                        商业合作
                    </div>
                    <div class="text-desc-2">
                        您想与我们一起迈向太空吗？
                    </div>
                    <div class="text-desc-3">
                        尊敬的企业及个人客户：我们的发射服务可提供整体/分部品牌广告合作及其他营销服务，请您联系我们洽谈具体方案。
                    </div>
                    <div class="text-btn">
                        <el-button :size="isMobile? 'mini': 'medium'" type="primary" plain @click="gotoMail('bd@orienspace.com')">
                            联系我们
                        </el-button>
                    </div>
                </section>
            </section>
        </div>
        <div id="serviceInvite" class="img-container">
            <img class="wallpaper" src="/img/service/service_33.jpg" alt="">
            <section class="text-wallpaper" :class="{isMobile}">
                <section class="text-content type-page">
                    <div class="main-title">
                        想要近距离观看发射火箭吗?
                    </div>
                    <div class="sub-title">
                        引力-1号 发射倒计时
                    </div>
                    <div class="time-text">
                        2023年
                    </div>
                    <div class="text-btn">
                        <el-button :size="isMobile? 'mini': 'medium'" type="primary" plain @click="gotoMail('bd@orienspace.com')">
                            预约观看
                        </el-button>
                    </div>
                </section>
            </section>
        </div>
        <div id="serviceTravel" class="carouser-content" :class="{isMobile}">
            <carousel
                key="dfasdfasdf"
                :nav="false"
                :loop="true"
                :smart-speed="1500"
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
    </section>
</template>

<script>
import { mapState } from 'vuex'
import BannerComSmall from '../components/BannerComSmall.vue'
import { gotoMail } from '@/utiles/tool.js'
export default {
    name: 'ServicePage',
    components: { BannerComSmall },
    data () {
        return {
            carouselData: [
                { title: '太空旅行', url: '/img/service/carouse_0.jpg' },
                { title: '太空旅行', url: '/img/service/carouse_1.jpg' },
                { title: '太空旅行', url: '/img/service/carouse_2.jpg' },
            ],
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        gotoMail,
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
                font-weight: 500;
                line-height: 3.2rem;
                padding-bottom: 1.9rem;
            }

            .mark-0 {
                font-size: 1.7rem;
                line-height: 1.6rem;
                font-weight: 300;
                padding-bottom: 1.9rem;
            }

            &.isMobile {
                padding-bottom: 10px;

                .desc {
                    font-size: 4.7rem;
                    font-weight: bold;
                    line-height: 26px;
                    padding-bottom: 23px;
                }

                .mark {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 18px;
                    padding-bottom: 19px;
                }

                .mark-0 {
                    font-size: 10px;
                    color: #c9caca;
                    line-height: 20px;
                    font-weight: 300;
                    padding-bottom: 5px;
                }
            }
        }

        .img-content {
            .home-img {
                background-color: #000;
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

                &.left {
                    width: 50%;
                    transform: translateX(74%);
                }

                &.right {
                    width: 15%;
                    transform: translateX(100%);
                }

                &.isMobile {
                    &.left {
                        width: 50%;
                        transform: translateX(91%);
                    }
                }
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

                    .main-title {
                        font-size: 33px;
                        color: #fff;
                        margin-bottom: 76px;
                    }

                    .main-title-0 {
                        font-size: 33px;
                        color: #fff;
                        margin-bottom: 16px;
                    }

                    .main-title-1 {
                        font-size: 33px;
                        color: #fff;
                        padding: 100px 0 16px;
                    }

                    .sub-title {
                        font-size: 16px;
                        margin-bottom: 15px;
                        color: #c9caca;
                    }

                    .time-text {
                        font-size: 36px;
                        font-weight: 700;
                        color: #fff;
                    }

                    .text-desc {
                        width: 266px;
                        font-size: 16px;
                        color: #c9caca;
                        line-height: 24px;
                    }

                    .text-desc-2 {
                        font-size: 16px;
                        color: #c9caca;
                        line-height: 24px;
                    }

                    .text-desc-3 {
                        width: 450px;
                        font-size: 16px;
                        color: #c9caca;
                        padding-top: 30px;
                        line-height: 24px;
                    }

                    .text-btn {
                        padding-top: 66px;
                    }
                }

                &.isMobile {
                    padding: 0 15px;

                    .text-content {
                        .main-title {
                            font-size: 14px;
                            color: #fff;
                            margin-bottom: 30px;
                        }

                        .main-title-0 {
                            font-size: 14px;
                            color: #fff;
                            margin-bottom: 16px;
                        }

                        .main-title-1 {
                            font-size: 14px;
                            color: #fff;
                            padding: 32px 0 16px;
                        }

                        .sub-title {
                            font-size: 10px;
                            margin-bottom: 15px;
                            color: #c9caca;
                        }

                        .time-text {
                            font-size: 14px;
                            font-weight: 700;
                            color: #fff;
                        }

                        .text-desc {
                            width: 150px;
                            font-size: 10px;
                            color: #c9caca;
                            line-height: 18px;
                        }

                        .text-desc-2 {
                            font-size: 10px;
                            color: #c9caca;
                            line-height: 15px;
                        }

                        .text-desc-3 {
                            width: 150px;
                            font-size: 10px;
                            color: #c9caca;
                            padding-top: 15px;
                            line-height: 18px;
                        }

                        .text-btn {
                            padding-top: 33px;
                        }
                    }
                }

                .text-align-right {
                    text-align: right;

                    .text-desc-3 {
                        align-self: flex-end;
                    }
                }
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
                font-size: 3rem;
            }

            &.isMobile {
                .carousel-title {
                    font-size: 15px;
                }
            }
        }
    }

</style>
