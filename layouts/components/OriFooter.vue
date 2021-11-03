<template>
    <div class="OriFooter" :class="{isMobile: isMobile}">
        <div class="OriFooter-contant type-page">
            <el-row :type="isMobile ? '' : 'flex'" justify="space-between">
                <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                    <div class="content-logo">
                        <svg class="icon content-logo-icon" aria-hidden="true">
                            <use xlink:href="#Orien-xingyunlogo" />
                        </svg>
                        <el-row class="item-group">
                            <el-col class="group-grid" :span="24">
                                <div>商务合作：SERVICE@ORIENSP</div>
                                <div>媒体合作：PR@ORIENSPACE.C</div>
                                <div>加入我们：HR@ORIENSPACE.C</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('productService/guardianDock/privacyDataSystem')">
                            首页
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('productService/guardianDock/privacyDataSystem')">
                            产品
                        </h3>
                        <el-row class="item-group">
                            <el-col class="group-grid" :span="24">
                                <div>太空探索</div>
                                <div>太空探索</div>
                                <div>太空探索</div>
                                <div>太空探索</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('productService/guardianDock/privacyDataSystem')">
                            新闻
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('productService/guardianDock/privacyDataSystem')">
                            加入我们
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <div class="content-item">
                        <h3 class="item-title" @click="goToNext('productService/guardianDock/privacyDataSystem')">
                            关于我们
                        </h3>
                        <el-row class="item-group">
                            <el-col class="group-grid" :span="24">
                                <div>太空探索</div>
                                <div>太空探索</div>
                                <div>太空探</div>
                                <div>太空探索</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
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
    },
}
</script>
<style lang="scss" scoped>
.OriFooter {
    background-color: #000;
    color: #c9caca;
    font-weight: 200;

    .OriFooter-contant {
        padding: 60px 15px;

        .content-logo {
            display: flex;
            padding-bottom: 30px;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            top: 10px;

            .content-logo-icon {
                width: 215px;
                height: 28px;
                color: #fff;
                font-size: 17px;
                line-height: 28px;
            }
        }

        .content-item {
            .item-title {
                font-size: 14px;
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

        .content-logo {
            padding-left: 30px;
        }

        .content-item {
            padding-left: 30px;
            padding-bottom: 10px;

            .item-title {
                line-height: 60px;
            }

            .groups-grid {
                padding-bottom: 10px;
            }

            .in-icon-svg {
                top: -27px !important;
            }
        }
    }
}
</style>
