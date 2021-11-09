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
                        <div class="constent-title">
                            总体设计师
                        </div>
                        <div class="content-sub-title">
                            岗位职责
                        </div>
                        <p>1.负责运载火箭总体方案论证与设计、总体技术指标分解； </p>
                        <p>2.负责运载火箭各分系统技术方案和指标协调； </p>
                        <p>3.负责运载火箭总体参数计算、设计与优化； </p>
                        <p>4.负责运载火箭大型地面试验项目策划，参加大型地面试验； </p>
                        <p>5.负责运载火箭飞行试验方案协调，编制飞行试验大纲； </p>
                        <p>6.负责运载火箭与卫星等有效载荷的接口协调，参与发射场和测控系统接口协调； </p>
                        <p>7.负责国内外相关技术发展现状跟踪和研究； </p>
                        <p>8.负责相关报告和文件编制。</p>
                        <div class="content-sub-title">
                            任职要求
                        </div>
                        <p>1.飞行器设计、控制系统工程、火箭发动机等专业； </p>
                        <p>2.具备较强的逻辑思维，具有较强的沟通与协作能力； </p>
                        <p>3.具有3年及以上相关领域工作经验者优先。</p>
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

            .content-sub-title {
                color: $--color-primary;
                padding: 25px 0 15px;
            }
        }
    }
}

</style>
