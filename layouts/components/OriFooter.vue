<template>
    <div class="OriFooter" :class="{isMobile: isMobile}">
        <div class="footer-line type-page" />
        <div class="OriFooter-contant type-page">
            <el-row :type="isMobile ? '' : 'flex'" justify="space-between">
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('/')">
                            首页
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('/servicePage')">
                            服务
                        </h3>
                        <el-row v-if="!isMobile" class="item-group">
                            <el-col class="group-grid" :span="24">
                                <div @click="goToHash('servicePage', 'serviceTitle')">
                                    太空物流
                                </div>
                                <div @click="goToHash('servicePage', 'serviceCoop')">
                                    商业合作
                                </div>
                                <div @click="goToHash('servicePage', 'serviceInvite')">
                                    观众邀请
                                </div>
                                <div @click="goToHash('servicePage', 'serviceTravel')">
                                    太空探索
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('productPage')">
                            产品
                        </h3>
                        <el-row v-if="!isMobile" class="item-group">
                            <el-col class="group-grid" :span="24">
                                <div @click="goToHash('productPage', 'numberFirst')">
                                    引力1号
                                </div>
                                <div @click="goToHash('productPage', 'numberSecond')">
                                    引力2号
                                </div>
                                <div @click="goToHash('productPage', 'numberThird')">
                                    引力3号
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('/newsPage')">
                            新闻动态
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('/joinPage')">
                            加入我们
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('/aboutPage')">
                            关于我们
                        </h3>
                        <el-row v-if="!isMobile" class="item-group">
                            <el-col class="group-grid" :span="24">
                                <div @click="goToHash('aboutPage', 'aboutTimeline')">
                                    发展历程
                                </div>
                                <!-- <div @click="goToHash('aboutPage', 'serviceTravel')">
                                    资质荣誉
                                </div> -->
                                <div @click="goToHash('aboutPage', 'aboutPartners')">
                                    投资方
                                </div>
                                <div @click="goToHash('aboutPage', 'aboutContact')">
                                    联系我们
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col style="order: -1;" :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                    <div class="content-logo">
                        <svg class="icon content-logo-icon" aria-hidden="true">
                            <use xlink:href="#Orien-LOGO" />
                            <!-- <use xlink:href="#Orien-xingyunlogo" /> -->
                        </svg>
                        <div class="contact-group">
                            <div class="contact-group-item">
                                <span style="letter-spacing: 3.5px;">商务合作</span> ：bd@orienspace.com
                            </div>
                            <div class="contact-group-item">
                                <span style="letter-spacing: 3.5px;">媒体合作</span> ：pr@orienspace.com
                            </div>
                            <div class="contact-group-item">
                                <span style="letter-spacing: 3.5px;">人才招聘</span> ：hr@orienspace.com
                            </div>
                            <div class="contact-group-item">
                                投资者关系 ：ir@orienspace.com
                            </div>
                            <div class="contact-group-item">
                                <span style="letter-spacing: 3.5px;">联系电话</span> ：010-67857929
                            </div>
                        </div>
                        <div class="QR-group">
                            <img class="QR-code" src="/img/QR_code.png" alt="">
                            <div>
                                <p class="code-title">
                                    东方空间微信公众号
                                </p>
                                <p class="code-text">
                                    扫码关注我们，了解更多
                                </p>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <p class="Ori-copy-right" :class="{isMobile: isMobile}">
            <a style="color: rgba(255, 255, 255, 0.6);" class="icp" rel="nofollow" href="http://beian.miit.gov.cn" target="_blank">版权所有 © 2021 东方空间  京 ICP 备 xxxxxxx 号</a>
            <a style="color: rgba(255, 255, 255, 0.6);" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=4403050122005665" target="_blank"> | 京公网安备 xxxxxxxxx 号</a>
        </p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { goToHash } from '@/utiles/tool.js'
export default {
    data () {
        return {
            logoSvg: { url: 'logo-light.svg', fit: 'contain' },
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        goToNext (path) {
            this.$router.push(path)
        },
        goToHash (path, hash) {
            goToHash.call(this, path, hash)
        },
    },

}
</script>
<style lang="scss" scoped>
.OriFooter {
    background-color: #000;
    color: #c9caca;
    font-weight: 200;
    overflow: hidden;

    .footer-line {
        border-top: 1px solid #f49e17;
    }

    .OriFooter-contant {
        padding: 60px 15px;

        /deep/.el-col {
            transform: translateX(77px);

            &:last-child {
                transform: translateX(0);
            }
        }

        .content-logo {
            display: flex;
            padding-bottom: 30px;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            // top: 10px;

            .content-logo-icon {
                transform: scale(1.5) translateX(9px);
                height: 28px;
                color: #fff;
                font-size: 90px;
                line-height: 28px;
            }

            .contact-group {
                padding-top: 30px;
                font-size: 14px;
                color: #c9caca;
                line-height: 25px;
            }

            .QR-group {
                padding-top: 18px;
                display: flex;
                align-items: flex-end;

                .QR-code {
                    width: 74px;
                    height: 74px;
                    margin-right: 8px;
                }

                .code-title {
                    font-size: 13px;
                    font-weight: 300;
                    color: #f49e17;
                    line-height: 18px;
                }

                .code-text {
                    padding-top: 8px;
                    font-size: 10px;
                    color: #c9caca;
                    line-height: 13px;
                }
            }
        }

        .content-item {
            padding-top: 62px;

            .item-title {
                font-size: 14px;
                cursor: pointer;
            }

            .item-group {
                .group-grid {
                    cursor: pointer;
                    font-size: 12px;
                    line-height: 27px;
                }
            }

            .item-groups {
                .groups-grid {
                    .grid-text {
                        font-size: 12px;
                        line-height: 20px;
                    }

                    .gird-img {
                        padding-top: 8px;
                        width: 70px;
                        height: 70px;

                        &.isMobile {
                            padding-top: 0;
                        }
                    }

                    .in-icon-svg {
                        font-size: 14px;
                        position: relative;
                        top: -10px;
                    }
                }
            }
        }
    }

    &.isMobile {
        font-weight: 400;

        /deep/.el-col {
            transform: translateX(0);
        }

        .content-logo {
            padding-left: 15px;
        }

        .content-item {
            padding-left: 15px;
            padding-bottom: 10px;
            padding-top: 0;

            .item-title {
                line-height: 25px;
            }

            .groups-grid {
                padding-bottom: 10px;
            }

            .in-icon-svg {
                top: -27px !important;
            }
        }
    }

    .Ori-copy-right {
        background-color: #1d2023;
        padding: 12px 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        line-height: 12px;

        &.isMobile {
            line-height: 22px;
            text-align: left;
        }
    }
}
</style>
