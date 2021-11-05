
<template>
    <section class="newsPage-container">
        <banner-com
            url-source="/img/news/news_banner.png"
            main-title="新闻"
        />
        <section class="news-content">
            <header class="news-nav type-page">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="公司动态" name="first" />
                    <el-tab-pane label="媒体报道" name="second" />
                </el-tabs>
            </header>
            <section class="news-content type-page">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <div class="grid-content bg-purple">
                            <img class="content-img" src="/img/news/news_0.jpeg" alt="">
                            <div class="content-text">
                                <span class="time">09/13/2021</span>
                                <p class="desc">
                                    东方空间西安动力中心成立，招聘正式启动
                                </p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <div class="grid-content bg-purple">
                            <img class="content-img" src="/img/news/news_1.jpeg" alt="">
                            <div class="content-text">
                                <span class="time">09/08/2021</span>
                                <p class="desc">
                                    东方空间全新品牌视觉形象发布 东方空间全新品牌视觉形象发布东方空间全新品牌视觉形象发布
                                </p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <div class="grid-content bg-purple">
                            <img class="content-img" src="/img/news/news_2.jpeg" alt="">
                            <div class="content-text">
                                <span class="time">06/09/2021</span>
                                <p class="desc">
                                    东方空间完成4亿元天使轮系列融资，经纬、红杉联合领投 间完成4亿元天使轮系列融资，经纬、红杉联合领投 间完成4亿元天使轮系列融资，经纬、红杉联合领投 、红杉联合领投 间完成4亿元天使轮系列融资，经纬、红杉联合领投
                                </p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </section>
        </section>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'NewsPage',
    components: { BannerCom },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
    },
}
</script>
<style lang='scss' scoped>
.newsPage-container {
    .news-content {
        background-color: #000;
        color: #fff;

        .news-nav {
            /deep/.el-tabs__nav-wrap::after {
                background-color: #000;
            }
        }

        .news-content {
            .grid-content {
                background-color: #000;
                height: 214px;
                overflow: hidden;
                border: 1px solid #979797;

                .content-img {
                    height: 110px;
                    min-width: 100%;
                }

                .content-text {
                    padding: 15px 25px;

                    .time {
                        color: #979b9b;
                        font-size: 12px;
                        padding-bottom: 10px;
                    }

                    .desc {
                        font-size: 13px;
                        line-height: 18px;
                        overflow: hidden;
                        display: -webkit-box;
                        white-space: normal !important;
                        text-overflow: ellipsis;
                        word-wrap: break-word;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }

            padding-bottom: 210px;
        }
    }
}

</style>
