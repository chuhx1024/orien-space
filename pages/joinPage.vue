<template>
    <section class="join-page-container">
        <banner-com
            url-source="/img/join/join_banner.jpg"
            main-title="加入我们"
        >
            <p class="small">
                东方空间希望对空间探索，航天技术有梦想的有志之士加入我们，让我们一起努力，拓展人类边界；
            </p>
            <p class="small">
                我们为您提供具有市场竞争力的薪酬，期权，六险一金，挑战性的工作任务和人文的工作环境。
            </p>
        </banner-com>
        <div class="jonin-content">
            <el-collapse v-model="activeName" class="type-page" accordion @change="handleChange">
                <el-collapse-item v-for="(item, index) in joinData" :key="index" :name="index">
                    <template slot="title">
                        <div class="content-header">
                            <div class="header-left fl">
                                总体设计师
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
                        <div class="content-title">
                            岗位职责
                        </div>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        <div class="content-title">
                            任职要求
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'JoinPage',
    components: { BannerCom },
    data () {
        return {
            activeName: 0,
            joinData: [
                { title: '总体设计师', content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；' },
                { title: '总体设计师', content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；' },
                { title: '总体设计师', content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；' },
                { title: '总体设计师', content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；' },
                { title: '总体设计师', content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；' },
            ],
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
        padding: 20px;

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
                    transition: transform 0.3s;

                    &.isActive {
                        color: $--color-primary;
                        transform: scaleX(1.5) translateX(-2px);
                    }
                }
            }
        }

        .content-wrap {
            .content-title {
                color: $--color-primary;
            }
        }
    }
}

</style>
