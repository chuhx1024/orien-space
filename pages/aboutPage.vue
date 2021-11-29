<template>
    <section class="about-page-container">
        <banner-com-small
            url-source="/img/about/about_banner.jpg"
            main-title="关于我们"
        />
        <div class="about-desc" :class="{isMobile: isMobile}">
            <el-row class="type-page" type="flex" style="flex-wrap: wrap;">
                <el-col class="left-content" :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
                    <div>
                        <p class="left-text">
                            东方空间由资深航天技术团队与成功科技创业者联合创办，旨在帮助人类拓展发展空间，让更多人享受太空新文明，有效补充全球航天发射能力。
                        </p>

                        <p class="left-text">
                            公司秉承现代化科技公司管理模式，严谨、敏捷、协作的精神，希望探索出全新的高效率航天技术发展范式。
                        </p>
                    </div>
                </el-col>
                <el-col v-if="!isMobile" :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                    <img class="right-content-img" src="/img/about/about_desc.jpg" alt="">
                </el-col>
            </el-row>
        </div>
        <div class="about-market" :class="{isMobile: isMobile}">
            <div class="market-title">
                公司布局
            </div>
            <el-row class="type-page market-content" type="flex" style="flex-wrap: wrap;">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <img class="left-content-img" src="/img/about/about_map.png" alt="">
                </el-col>
                <el-col class="left-content-text" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="text-group">
                        <h3 class="text-title">
                            北京亦庄
                        </h3>
                        <p class="text-desc">
                            火箭研发中心
                        </p>
                    </div>
                    <div class="text-group">
                        <h3 class="text-title">
                            山东烟台
                        </h3>
                        <p class="text-desc">
                            东方航天港固体火箭AIT中心
                        </p>
                    </div>
                    <div class="text-group">
                        <h3 class="text-title">
                            陕西西安
                        </h3>
                        <p class="text-desc">
                            火箭发动机研发中心
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div id="aboutTimeline" class="about-timeline" :class="{isMobile}">
            <div class="time-line-title">
                发展历程
            </div>
            <el-tabs class="type-page">
                <el-tab-pane
                    v-for="(items, index) in timeLineData"
                    :key="index"
                    :label="items.theYear"
                    class="timeline-item"
                >
                    <el-timeline class="timeline_item_content">
                        <el-timeline-item
                            v-for="(item, ind) in items.events"
                            :key="ind"
                            :timestamp="item.theTime"
                            placement="top"
                            color="#fff"
                        >
                            <p>{{ item.theEvent }}</p>
                        </el-timeline-item>
                    </el-timeline>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- <div class="about-honour" :class="{isMobile: isMobile}">
            <div class="honour-title">
                荣誉资质
            </div>
            <div class="honour-content type-page">
                <template v-if="isMobile">
                    <carousel
                        key="dfasdfasdf"
                        :nav="false"
                        :items="2"
                    >
                        <div
                            v-for="(item, index) in honourImgData"
                            :key="index"
                            class="carouser-card"
                        >
                            <img class :src="`/img/about/${item}`" alt="">
                        </div>
                    </carousel>
                </template>
                <template v-else>
                    <carousel
                        key="12"
                        :nav="false"
                        :items="5"
                    >
                        <div
                            v-for="(item, index) in honourImgData"
                            :key="index"
                            class="carouser-card"
                        >
                            <img class :src="`/img/about/${item}`" alt="">
                        </div>
                    </carousel>
                </template>
            </div>
        </div> -->
        <div id="aboutPartners" class="about-partners" :class="{isMobile}">
            <div class="partners-title">
                投资者关系
            </div>
            <div v-if="isMobile" class="partners-content">
                <carousel
                    key="dfasdfasdf0"
                    :nav="false"
                    :loop="true"
                    :smart-speed="1500"
                    :autoplay-timeout="4000"
                    :autoplay="true"
                    :items="1"
                >
                    <div class="partners-img type-page">
                        <div v-for="item in partnersImgMobile" :key="item" class="content-item">
                            <img class="img" :src="`/img/about/${item}`" alt="">
                        </div>
                    </div>
                    <div class="partners-text type-page">
                        <div v-for="item in partnersText" :key="item" class="content-item">
                            <img v-if="item.indexOf('partners') !== -1" :src="`/img/about/${item}`" alt="">
                            <span v-else>{{ item }}</span>
                        </div>
                        <div class="content-item-img">
                            <img class="img" src="/img/about/partners_9.jpeg" alt="">
                            <!-- <img class="img" src="/img/about/partners_100.jpeg" alt=""> -->
                        </div>
                    </div>
                </carousel>
            </div>
            <div v-else class="partners-content">
                <div class="partners-img type-page">
                    <div v-for="item in partnersImg" :key="item" class="content-item">
                        <img class="img" :src="`/img/about/${item}`" alt="">
                    </div>
                </div>
                <div class="partners-text type-page">
                    <div v-for="item in partnersText" :key="item" class="content-item">
                        <img v-if="item.indexOf('partners') !== -1" :src="`/img/about/${item}`" alt="">
                        <span v-else>{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="aboutContact" class="about-contact" :class="{isMobile: isMobile}">
            <div class="contact-title">
                联系我们
            </div>
            <el-row class="type-page contact-content" type="flex" style="flex-wrap: wrap;">
                <el-col class="left-content" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="contact-group">
                        <div class="contact-group-item">
                            <span style="letter-spacing: 4.3px;">公司地址</span> ：北京市大兴区亦庄地盛北街经开大厦B座
                        </div>
                        <div class="contact-group-item">
                            <span style="letter-spacing: 4.3px;">商务合作</span> ：bd@orienspace.com
                        </div>
                        <div class="contact-group-item">
                            <span style="letter-spacing: 4.3px;">媒体合作</span> ：pr@orienspace.com
                        </div>
                        <div class="contact-group-item">
                            <span style="letter-spacing: 4.3px;">人才招聘</span> ：hr@orienspace.com
                        </div>
                        <div class="contact-group-item">
                            投资者关系 ：ir@orienspace.com
                        </div>
                        <div class="contact-group-item">
                            <span style="letter-spacing: 4.3px;">联系电话</span> ：010-67857929
                        </div>
                    </div>
                </el-col>
                <el-col class="right-content" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <a href="https://j.map.baidu.com/ee/csoc" target="_blank">
                        <img class="content-img" src="/img/about/contact.jpeg" alt="">
                    </a>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerComSmall from '../components/BannerComSmall.vue'

export default {
    name: 'AboutPage',
    components: { BannerComSmall },
    data () {
        return {
            timeLineData: [{
                theYear: '2021年',
                events: [
                    { theTime: '2021.11', theEvent: '北京子公司东方空间技术（北京）有限公司正式成立。' },
                    { theTime: '2021.09', theEvent: '西安子公司东方空间（西安）宇航技术有限公司正式成立。' },
                    { theTime: '2021.06', theEvent: '注册资本由2000万元增资至2亿元。' },
                    { theTime: '2021.06', theEvent: '完成4亿元天使轮系列融资。' },
                    { theTime: '2021.05', theEvent: '公司党支部成立。' },
                    { theTime: '2021.05', theEvent: '引力1号运载火箭项目完成方案论证评审工作，各分系统正式转入方案设计阶段。' },
                    { theTime: '2021.01', theEvent: '与上海垣信卫星科技有限公司完成了发射意向协议签署。' },
                ],
            },
            {
                theYear: '2020年',
                events: [
                    { theTime: '2020.12', theEvent: '在山东省海阳市与中国电科天地办/天地信息网络有限公司举行了战略合作框架协议和发射服务意向协议签约仪式。' },
                    { theTime: '2020.11', theEvent: '与北京最终前沿深空科技有限公司完成了战略合作框架协议和发射服务意向协议签署。' },
                    { theTime: '2020.11', theEvent: '与长光卫星技术有限公司完成了战略合作协议和发射意向协议签署。' },
                    { theTime: '2020.07', theEvent: '完成首轮融资，融资金额5000万元。' },
                    { theTime: '2020.06', theEvent: '公司正式成立，在北京、山东两地办公。' },
                ],
            },
            ],
            honourImgData: [
                'honour_0.jpg',
                'honour_0.jpg',
                'honour_0.jpg',
                'honour_0.jpg',
                'honour_0.jpg',
                'honour_0.jpg',
                'honour_0.jpg',
                'honour_0.jpg',
            ],
            partnersImg: [
                'partners_0.jpeg',
                'partners_1.jpeg',
                'partners_2.jpeg',
                'partners_3.jpeg',
                'partners_4.jpeg',
                'partners_5.jpeg',
                'partners_6.jpeg',
                'partners_7.jpeg',
                'partners_8.jpeg',
                'partners_9.jpeg',
            ],
            partnersImgMobile: [
                'partners_0.jpeg',
                'partners_1.jpeg',
                'partners_2.jpeg',
                'partners_3.jpeg',
                'partners_4.jpeg',
                'partners_5.jpeg',
                'partners_6.jpeg',
                'partners_7.jpeg',
                'partners_8.jpeg',
            ],
            partnersText: [
                '赛博朋克奇点',
                '蓝色空间',
                '天府三江资本',
                '王国斌',
                '张学政',
                '国丰集团',
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
.about-page-container {
    .about-desc {
        background-color: #000;
        padding-top: 70px;

        .left-content {
            display: flex;
            flex-direction: column;
            background: rgba(18, 50, 128, 0.19);
            justify-content: center;
            padding: 109px 42px;

            .left-text {
                font-size: 16px;
                color: #fff;
                line-height: 23px;

                &:nth-child(2) {
                    padding-top: 20px;
                }
            }
        }

        .right-content-img {
            width: 100%;
        }

        &.isMobile {
            padding-left: 15px;
            padding-right: 15px;

            .left-text {
                font-size: 14px;
            }
        }
    }

    .about-market {
        background-color: #000;

        .market-title {
            text-align: center;
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            padding: 130px 0 115px;
        }

        .market-content {
            padding-bottom: 50px;

            .left-content-img {
                width: 100%;
            }

            .left-content-text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 12% 10%;
                color: #fff;

                .text-group {
                    padding-bottom: 60px;

                    .text-title {
                        font-size: 25px;
                        font-weight: 500;
                        line-height: 37px;
                    }

                    .text-desc {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 37px;
                    }
                }
            }
        }

        &.isMobile {
            padding-bottom: 1px;

            .market-title {
                font-size: 4.7rem;
                font-weight: bold;
                line-height: 4.7rem;
                padding: 35px 0 30px;
            }

            .market-content {
                .left-content-text {
                    padding: 0 15px;
                    position: absolute;
                    top: 50%;

                    .text-group {
                        padding-bottom: 10px;

                        .text-title {
                            font-size: 18px;
                        }

                        .text-desc {
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }

    .about-timeline {
        /deep/.el-tabs__item {
            font-size: 20px;
            font-weight: 700;
            color: #fff;

            &:hover {
                color: #fff;
            }
        }

        /deep/.el-tabs__item.is-active {
            color: $--color-primary;
        }

        /deep/.el-tabs__active-bar {
            background-color: #fff;
        }

        /deep/.title-box h2 {
            color: #fff;
        }

        /deep/.el-tabs__nav-wrap::after {
            height: 1px;
            opacity: 0.35;
        }

        position: relative;
        overflow: hidden;
        background: #05081a;
        padding: 0 15px 100px;

        .time-line-title {
            text-align: center;
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            padding: 43px 0 51px;
        }

        .timeline-item {
            padding: 40px 0 0 100px;
            color: #fff;

            /deep/.el-timeline-item {
                padding-bottom: 31px;
            }

            /deep/.el-timeline-item__timestamp {
                position: absolute;
                left: -100px;
                top: 2px;
                color: #fff;
                font-size: 16px;
            }

            /deep/.el-timeline-item__tail {
                opacity: 0.75;
                left: -10px;
                border-left: 1px solid #e4e7ed;
            }

            /deep/.el-timeline-item__node--normal {
                left: -13px;
                width: 8px;
                height: 8px;
            }

            /deep/.el-timeline-item__timestamp.is-top {
                padding-top: 0;
            }

            /deep/.el-timeline-item__content {
                position: relative;
                top: 0;
                left: -2px;
                color: #fff;
                font-size: 16px;

                p {
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }

        &.isMobile {
            padding: 0 15px 70px;

            .time-line-title {
                font-size: 4.7rem;
                font-weight: bold;
                line-height: 4.7rem;
                padding: 35px 0 30px;
            }

            .timeline-item {
                padding: 50px 0 0 70px;

                /deep/.el-timeline-item {
                    padding-bottom: 20px;
                }

                /deep/.el-timeline-item__timestamp {
                    left: -70px;
                    font-size: 14px;
                }

                /deep/.el-timeline-item__tail {
                    left: 8px;
                }

                /deep/.el-timeline-item__node--normal {
                    left: 4px;
                }

                /deep/.el-timeline-item__content {
                    left: 0;
                    top: -2px;
                    font-size: 14px;
                    line-height: 21px;

                    p {
                        line-height: 20px;
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .about-honour {
        background-color: #000;

        /deep/.owl-theme .owl-dots .owl-dot.active span, /deep/.owl-theme .owl-dots .owl-dot:hover span {
            background: $--color-primary;
        }

        /deep/.owl-dots {
            margin-top: 47px;
        }

        .honour-title {
            text-align: center;
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            padding: 70px 0 35px;
        }

        .honour-content {
            .carouser-card {
                margin: 0 auto;
                width: 92%;
            }
        }

        &.isMobile {
            .honour-content {
                .carouser-card {
                    width: 98%;
                }
            }
        }
    }

    .about-partners {
        background-color: #000;
        padding-bottom: 150px;
        overflow: hidden;

        .partners-title {
            text-align: center;
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            padding: 70px 0 67px;
        }

        .partners-content {
            .partners-img {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .content-item {
                    width: 24%;
                    height: 38px;
                    padding-top: 30px;
                    text-align: center;

                    &:nth-child(5n + 1) {
                        text-align: left;
                        width: 14%;
                    }

                    &:nth-child(5n + 5) {
                        text-align: right;
                        width: 14%;
                    }

                    .img {
                        height: 38px;
                    }
                }
            }

            .partners-text {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .content-item {
                    width: 14.3%;
                    padding-top: 30px;
                    font-size: 17px;
                    color: #fff;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;

                    &:nth-child(7n + 1) {
                        text-align: left;
                    }

                    &:nth-child(7n + 7) {
                        width: 14%;
                    }

                    img {
                        width: 35px;
                    }
                }
            }
        }

        &.isMobile {
            padding: 0 15px;

            .partners-title {
                font-size: 4.7rem;
                font-weight: bold;
                line-height: 4.7rem;
                padding: 35px 0 30px;
            }

            .partners-content {
                .partners-img {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .content-item {
                        width: 33.3%;
                        height: auto;
                        padding-top: 30px;
                        text-align: center;

                        &:nth-child(3n + 1) {
                            text-align: left;
                            width: 30%;
                        }

                        &:nth-child(3n + 3) {
                            text-align: right;
                            width: 30%;
                        }

                        &:nth-child(2) {
                            height: 50px;

                            .img {
                                display: inline-block;
                                height: 50px;
                                width: 79px;
                            }
                        }

                        &:nth-child(5) {
                            padding-top: 45px;
                        }

                        .img {
                            height: auto;
                        }
                    }
                }

                .partners-text {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .content-item-img {
                        padding-top: 30px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;

                        img {
                            width: 55%;

                            &:nth-child(2) {
                                width: 20%;
                            }
                        }
                    }

                    .content-item {
                        width: 33.3%;
                        padding-top: 30px;
                        font-size: 17px;
                        color: #fff;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                    }
                }
            }

            /deep/.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
                background: $--color-primary;
            }
        }
    }

    .about-contact {
        background-color: #05081a;
        padding-bottom: 70px;

        .contact-title {
            text-align: center;
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            padding: 70px 0 67px;
        }

        .contact-content {
            .right-content {
                .content-img {
                    width: 100%;
                }
            }

            .left-content {
                display: flex;
                align-items: center;

                .contact-group {
                    .contact-group-item {
                        color: #fff;
                        font-size: 17px;
                        line-height: 28px;
                    }
                }
            }
        }

        &.isMobile {
            padding-left: 15px;
            padding-right: 15px;

            .contact-title {
                font-size: 4.7rem;
                font-weight: bold;
                line-height: 4.7rem;
                padding: 35px 0 30px;
            }

            .contact-content {
                .right-content {
                    .content-img {
                        width: 100%;
                    }
                }

                .left-content {
                    display: flex;
                    align-items: center;

                    .contact-group {
                        .contact-group-item {
                            font-size: 17px;
                            line-height: 28px;
                        }
                    }
                }
            }

            .left-content {
                padding-bottom: 40px;
            }
        }
    }
}

</style>
