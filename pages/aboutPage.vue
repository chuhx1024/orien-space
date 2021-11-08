<template>
    <section class="about-page-container">
        <banner-com
            url-source="/img/about/about_banner.jpg"
            main-title="关于我们"
        />
        <div class="about-desc">
            <el-row class="type-page" type="flex">
                <el-col class="left-content" :span="15">
                    <div>
                        <p class="left-text">
                            东方空间由资深航天技术团队与成功科技创业者联合创办，旨在帮助人类拓展发展空间，让更多人享受太空新文明，有效补充全球航天发射能力。
                        </p>

                        <p class="left-text">
                            公司以现代化科技公司管理模式，严谨、敏捷、协作的精神，希望探索出全新的高效率航天技术发展范式。
                        </p>
                    </div>
                </el-col>
                <el-col :span="9">
                    <img class="right-content-img" src="/img/about/about_desc.jpg" alt="">
                </el-col>
            </el-row>
        </div>
        <div class="about-market">
            <div class="market-title">
                市场结构
            </div>
            <el-row class="type-page market-content" type="flex">
                <el-col :span="12">
                    <img class="left-content-img" src="/img/about/about_map.png" alt="">
                </el-col>
                <el-col class="left-content-text" :span="12">
                    <div class="text-group">
                        <h3 class="text-title">
                            北京总部
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
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'

export default {
    name: 'AboutPage',
    components: { BannerCom },
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
                    { theTime: '2021.04', theEvent: '东方空间注册资本由2000万元增资至2亿元。' },
                    { theTime: '2021.01', theEvent: '由山东宇航技术有限公司正式更名为东方空间技术（山东）有限公司。' },
                ],
            },
            {
                theYear: '2020年',
                events: [
                    { theTime: '2021.10', theEvent: '公司由山东宇航技术研究院有限公司正式更名为东方空间（山东）科技有限公司。截止2021年10月，实现山东海阳固体火箭AIT中心，北京研发中心，西安动力中心的产业布局。' },
                    { theTime: '2021.09', theEvent: '对西安子公司东方空间（西安）宇航技术有限公司进行了收购。' },
                    { theTime: '2021.06', theEvent: '东方空间注册资本由2000万元增资至2亿元。' },
                    { theTime: '2021.05', theEvent: '东方空间党支部成立。' },
                    { theTime: '2021.05', theEvent: 'YL-1运载火箭项目完成方案论证评审工作，各分系统正式转入方案设计阶段。' },
                    { theTime: '2021.04', theEvent: '东方空间注册资本由2000万元增资至2亿元。' },
                    { theTime: '2021.01', theEvent: '由山东宇航技术有限公司正式更名为东方空间技术（山东）有限公司。' },
                ],
            },
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

        .left-content {
            display: flex;
            flex-direction: column;
            background: rgba(18, 50, 128, 0.19);
            justify-content: center;
            padding: 109px 42px;

            .left-text {
                font-size: 17px;
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
            .left-content-img {
                width: 100%;
            }

            .left-content-text {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 12% 10%;
                color: #fff;

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

            /deep/.el-timeline-item__timestamp {
                position: absolute;
                left: -100px;
                top: 2px;
                color: #fff;
                font-size: 13px;
            }

            /deep/.el-timeline-item__tail {
                opacity: 0.75;
                left: -10px;
                border-left: 1px solid #e4e7ed;
            }

            /deep/.el-timeline-item__node--normal {
                left: -14px;
                width: 8px;
                height: 8px;
            }

            /deep/.el-timeline-item__timestamp.is-top {
                padding-top: 0;
            }

            /deep/.el-timeline-item__content {
                position: relative;
                top: 2px;
                left: -2px;
                color: #fff;
                font-size: 13px;

                p {
                    font-size: 13px;
                    line-height: 15px;
                }
            }
        }

        &.isMobile {
            padding: 0 15px 70px;

            .timeline-item {
                padding: 50px 0 0 70px;

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
}

</style>
