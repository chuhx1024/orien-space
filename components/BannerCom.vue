<template>
    <div class="BannerCom-container" :class="{isMobile: isMobile}">
        <img class="wallpaper" :src="urlSource" alt="">
        <section class="banner-wallpaper">
            <h2 v-if="mainTitle" class="main-title" :class="{isMobile: isMobile}">
                {{ mainTitle }}
            </h2>
            <div class="banner-desc">
                <slot />
            </div>
            <div v-if="bannerBtn" class="banner-btn">
                <a href="https://mp.weixin.qq.com/s/qc-Q7O8gfTly1WK57cIz4A" target="_blank">
                    <el-button :size="isMobile? 'mini': 'medium'" type="primary">
                        {{ bannerBtn }}
                    </el-button>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'BannerCom',
    props: {
        urlSource: {
            type: String,
            default: '',
        },
        mainTitle: {
            type: String,
            default: '',
        },
        bannerBtn: {
            type: String,
            default: '',
        },

    },
    computed: {
        ...mapState('app', ['isMobile']),
    },

}
</script>

<style lang='scss' scoped>
    .BannerCom-container {
        position: relative;
        line-height: 1;

        .wallpaper {
            width: 100%;
            background-size: cover;
        }

        .banner-wallpaper {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            .main-title {
                color: #fff;
                font-size: 4.7rem;
                line-height: 4.7rem;

                &.isMobile {
                    padding-top: 40px;
                }
            }

            .banner-desc {
                .small {
                    font-size: 12px;
                    line-height: 17px;
                    font-weight: 100;
                    color: #fff;
                }

                .small:nth-child(1) {
                    padding-top: 26px;
                }

                .big {
                    font-size: 3rem;
                    font-weight: 100;
                    color: #9fa7b4;
                    padding-top: 1.5rem;
                }

                .big:nth-child(1) {
                    padding-top: 4rem;
                }
            }

            .banner-btn {
                width: 13rem;
                min-width: 100px;
                margin-top: 8.9rem;

                /deep/.el-button {
                    width: 100%;
                    font-size: 1.5rem;
                }
            }
        }
    }

</style>
