
<template>
    <section class="newsPage-container" :class="{isMobile: isMobile}">
        <banner-com-small
            url-source="/img/news/news_banner.jpg"
            main-title="新闻"
        />
        <section class="news-content">
            <header class="news-nav type-page">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="公司动态" name="0">
                        <section class="news-group type-page">
                            <el-row :gutter="20">
                                <el-col v-for="item in newsData0" :key="item.id" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a :href="item.url" target="_blank">
                                        <div class="grid-content bg-purple">
                                            <img class="content-img" :src="item.imgUrl" alt="">
                                            <div class="content-text">
                                                <div class="time">
                                                    {{ item.createAt }}
                                                </div>
                                                <p class="desc">
                                                    {{ item.desc }}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </el-col>
                            </el-row>
                        </section>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="媒体报道" name="1">
                        <section class="news-group type-page">
                            <el-row :gutter="20">
                                <el-col v-for="item in newsData1" :key="item.id" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <div class="grid-content bg-purple">
                                        <img class="content-img" :src="item.imgUrl" alt="">
                                        <div class="content-text">
                                            <div class="time">
                                                {{ item.createAt }}
                                            </div>
                                            <p class="desc">
                                                {{ item.desc }}
                                            </p>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </section>
                    </el-tab-pane> -->
                </el-tabs>
            </header>
        </section>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerComSmall from '../components/BannerComSmall.vue'
export default {
    name: 'NewsPage',
    components: { BannerComSmall },
    data () {
        return {
            activeName: 0,
            newsData0: [
                {
                    id: 1,
                    url: 'https://mp.weixin.qq.com/s/gtYX-gKRW6ZihIkmjHdmsA',
                    imgUrl: '/img/news/news_0.jpeg',
                    createAt: '09/13/2021',
                    desc: '东方空间西安动力中心成立，招聘正式启动',
                    type: 0,
                },
                {
                    id: 2,
                    url: 'https://mp.weixin.qq.com/s/9iAAwTDJNgljoE_2eha67A',
                    imgUrl: '/img/news/news_1.png',
                    createAt: '09/08/2023',
                    desc: '东方空间全新品牌视觉形象发布',
                    type: 0,
                },
                {
                    id: 3,
                    url: 'https://mp.weixin.qq.com/s/qc-Q7O8gfTly1WK57cIz4A',
                    imgUrl: '/img/news/news_2.jpeg',
                    createAt: '06/09/2022',
                    desc: '东方空间完成4亿元天使轮系列融资，经纬、红杉联合领投',
                    type: 0,
                },
            ],
            newsData1: [
                {
                    id: 1,
                    url: 'http://www.baidu.com',
                    imgUrl: '/img/news/news_0.jpeg',
                    createAt: '2012/12/04',
                    desc: '东方空间西安动力中心成立，招聘正式启动',
                    type: 1,
                },
            ],
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
        handleClick () {

        },
    },
}
</script>
<style lang='scss' scoped>
.newsPage-container {
    .news-content {
        background-color: #000;
        color: #fff;
        overflow: hidden;

        .news-nav {
            /deep/.el-tabs__nav-wrap::after {
                background-color: #000;
            }

            /deep/.el-tabs__item {
                color: #fff;

                &:hover {
                    color: $--color-primary;
                }
            }

            /deep/.el-tabs__item.is-active {
                color: $--color-primary;
            }
        }

        .news-group {
            .grid-content {
                background-color: #000;
                height: 214px;
                overflow: hidden;
                border: 1px solid #979797;
                margin-bottom: 20px;
                cursor: pointer;

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

    &.isMobile {
        .news-content {
            padding: 0 15px;
        }
    }
}

</style>
