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
                            公司以现代化科技公司管理模式，严谨、敏捷、协作的精神，希望探索出全新的高效率航天技术发展范式。
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
                市场结构
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
                            固体火箭AIT中心（东方航天港海上发射中心）
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
        <div class="about-timeline" :class="{isMobile: isMobile}">
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
        <div class="about-partners" :class="{isMobile: isMobile}">
            <div class="partners-title">
                投资者关系
            </div>
            <div class="partners-content">
                <div class="partners-img type-page">
                    <el-row type="flex" align="middle" justify="center" style="flex-wrap: wrap;">
                        <el-col v-for="(item, index) in partnersImg" :key="item" :xs="8" :sm="8" :md="4" :lg="4" :xl="4">
                            <img class="content-item" :class="{spImg: index === 4}" :src="`/img/about/${item}`" alt="">
                        </el-col>
                    </el-row>
                </div>
                <div class="partners-text type-page">
                    <el-row>
                        <el-col v-for="item in partnersText" :key="item" :xs="8" :sm="8" :md="3" :lg="3" :xl="3">
                            <div class="content-item">
                                {{ item }}
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="about-contact" :class="{isMobile: isMobile}">
            <div class="contact-title">
                联系我们
            </div>
            <el-row class="type-page contact-content" type="flex" style="flex-wrap: wrap;">
                <el-col class="left-content" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="contact-group">
                        <div class="contact-group-item">
                            公司地址 ：北京市大兴区亦庄地盛北街经开大厦B座
                        </div>
                        <div class="contact-group-item">
                            商务合作 ：bd@orienspace.com
                        </div>
                        <di class="contact-group-item">
                            媒体合作 ：pr@orienspace.com
                        </di>
                        <div class="contact-group-item">
                            人才招聘 ：hr@orienspace.com
                        </div>
                        <div class="contact-group-item">
                            投融资合作：ir@orienspace.com
                        </div>
                        <div class="contact-group-item">
                            联系电话：010-67857929
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
                    { theTime: '2021.10', theEvent: '公司由山东宇航技术研究院有限公司正式更名为东方空间(山东)科技有限公司。截止2021年10月，实现山东海阳固体火箭AIT中心，北京研发中心，西安动力中心的产业布局。' },
                    { theTime: '2021.09', theEvent: '对西安子公司东方空间（西安）宇航技术有限公司进行了收购。' },
                    { theTime: '2021.06', theEvent: '东方空间注册资本由2000万元增资至2亿元。' },
                    { theTime: '2021.05', theEvent: '东方空间党支部成立。' },
                    { theTime: '2021.05', theEvent: 'YL-1运载火箭项目完成方案论证评审工作，各分系统正式转入方案设计阶段。' },
                    { theTime: '2021.04', theEvent: '完成4亿元天使轮系列融资。' },
                    { theTime: '2021.01', theEvent: '由山东宇航技术有限公司正式更名为东方空间技术（山东）有限公司。' },
                ],
            },
            {
                theYear: '2020年',
                events: [
                    { theTime: '2020.12', theEvent: '在山东省海阳市与中国电科天地办/天地信息网络有限公司举行了战略合作框架协议和发射服务意向协议签约仪式。' },
                    { theTime: '2020.11', theEvent: '与长光卫星技术有限公司举行了战略合作协议和发射意向协议签约仪式。' },
                    { theTime: '2020.11', theEvent: '与北京最终前沿深空科技有限公司举行了战略合作框架协议和发射服务意向协议签约仪式。' },
                    { theTime: '2020.09', theEvent: '北京分公司完成工商注册正式成立。北京分公司定位为山东宇航北京研发中心，主要开展火箭、卫星等项目的技术开发和市场开发工作。' },
                    { theTime: '2020.07', theEvent: '完成首轮融资，融资金额5000万元。' },
                    { theTime: '2020.06', theEvent: '公司正式成立。' },
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
            partnersImg: ['partners_0.jpeg', 'partners_1.jpeg', 'partners_2.jpeg', 'partners_3.png', 'partners_4.jpeg', 'partners_5.jpeg'],
            partnersText: ['经纬中国', '红杉中国', '三一重工', '三江资本', '无限启航', '张学政', '海阳宇航产业投资', '真格基金', '蓝色空间', '图灵创投', '天地网络', '众海投资', '王国斌', '赛博朋克奇点', '联想之星'],
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
                font-size: 33px;
                padding: 70px 0 50px;
            }

            .market-content {
                .left-content-text {
                    .text-group {
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

        .partners-title {
            text-align: center;
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            padding: 70px 0 67px;
        }

        .partners-content {
            .partners-img {
                .content-item {
                    width: 80px;
                    padding-top: 30px;
                    transform: translateX(40%);
                }

                // .spImg {
                //     width: 53px;
                //     transform: translateX(90%);
                // }
            }

            .partners-text {
                .content-item {
                    padding-top: 45px;
                    font-size: 17px;
                    color: #fff;
                    line-height: 23px;
                    text-align: center;
                }
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

            .left-content {
                padding-bottom: 40px;
            }
        }
    }
}

</style>
