<template>
    <section class="join-page-container">
        <banner-com-small
            url-source="/img/join/join_banner.jpg"
            main-title="加入我们"
        >
            <p class="small">
                东方空间希望对空间探索、航天技术有梦想的有志之士加入我们，让我们一起努力，拓展人类边界；
            </p>
            <p class="small">
                我们将为您提供具有市场竞争力的薪酬、期权、六险一金，以及挑战性的工作任务与人性化的工作环境。
            </p>
        </banner-com-small>
        <div class="jonin-content">
            <el-collapse v-model="activeName" class="type-page" accordion @change="handleChange">
                <el-collapse-item v-for="(item, index) in joinData" :key="index" :name="index">
                    <template slot="title">
                        <div class="content-header">
                            <div class="header-left fl">
                                {{ item.title }}
                            </div>
                            <div class="header-right fr">
                                <span class="arrow-text"> 查看详情</span>
                                <span class="arrow-icon-container">
                                    <svg class="icon arrow-icon" :class="{isActive: activeName === index}" aria-hidden="true">
                                        <use xlink:href="#Orien--_danjiantou" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </template>
                    <div class="content-wrap">
                        <div class="constent-title">
                            {{ item.title }}
                        </div>
                        <div class="content-sub-title">
                            岗位职责
                        </div>
                        <p v-for="(subItem, subIndex) in item.dutyList" :key="subIndex">
                            {{ subItem }}
                        </p>
                        <div class="content-sub-title">
                            任职要求
                        </div>
                        <p v-for="(subItem, subIndex) in item.metchList" :key="subIndex">
                            {{ subItem }}
                        </p>
                        <div class="content-sub-title">
                            <a href="mailto:hr@orienspace.com" target="_blank">简历投递方式：hr@orienspace.com</a>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerComSmall from '../components/BannerComSmall.vue'
import joinData from '@/utiles/joinUs.js'
export default {
    name: 'JoinPage',
    components: { BannerComSmall },
    data () {
        return {
            activeName: 0,
            joinData,
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
        handleChange (arr) {
            console.log(arr, 0)
        },
    },
}
</script>
<style lang='scss' scoped>
.join-page-container {
    .jonin-content {
        background-color: #000;
        padding: 100px 0;

        /deep/.el-collapse {
            background-color: #000;
            color: #fff;
            border: none;

            .el-collapse-item__header {
                background-color: #000;
                color: #fff;
                height: 84px;
                line-height: 84px;
                border-bottom: 1px solid rgba(201, 202, 202, 0.39);

                .el-collapse-item__arrow {
                    display: none;
                }
            }

            .el-collapse-item__wrap {
                border-bottom: 1px solid rgba(201, 202, 202, 0.39);
            }

            .el-collapse-item__content {
                background-color: #000;
                border: none;
                color: #fff;
            }
        }

        .content-header {
            width: 100%;

            .header-left {
                font-size: 20px;
                font-weight: 500;
            }

            .arrow-text {
                font-size: 15px;
                color: #c9caca;
            }

            .arrow-icon-container {
                width: 32px;
                display: inline-block;

                .arrow-icon {
                    color: #f49e17;
                    width: 33px;
                    transform: translateX(-2px);
                    transition: transform 0.3s;

                    &.isActive {
                        color: $--color-primary;
                        transform: scaleX(1.5) translateX(2px);
                    }
                }
            }
        }

        .content-wrap {
            padding: 0 30px;

            .constent-title {
                font-size: 20px;
                line-height: 32px;
                padding: 28px 0 10px;
            }

            p {
                font-size: 16px;
            }

            .content-sub-title {
                color: $--color-primary;
                padding: 25px 0 16px;
            }
        }
    }
}

</style>
