<template>
    <div class="BannerCom-container">
        <img class="wallpaper" :class="{isMobile: isMobile}" :src="urlSource" alt="">
        <section class="banner-wallpaper">
            <h2 v-if="mainTitle" class="main-title">
                {{ mainTitle }}
            </h2>
            <div class="banner-desc" :class="{isMobile: isMobile}">
                <slot />
            </div>
            <div v-if="bannerBtn" class="banner-btn">
                <el-button type="primary">
                    {{ bannerBtn }}
                </el-button>
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

            &.isMobile {
                height: 200px;
            }
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
            }

            .banner-desc {
                .small {
                    font-size: 1.2rem;
                    line-height: 2.4rem;
                    font-weight: 100;
                    color: #fff;
                }

                .small:nth-child(1) {
                    padding-top: 2.6rem;
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

                &.isMobile {
                    padding-left: 20px;
                    padding-right: 20px;

                    .small {
                        font-size: 12px;
                        line-height: 18px;
                        font-weight: 100;
                        color: #fff;
                    }

                    .small:nth-child(1) {
                        padding-top: 20px;
                    }
                }
            }

            .banner-btn {
                width: 13rem;
                min-width: 100px;
                margin-top: 13.5rem;

                /deep/.el-button {
                    width: 100%;
                    font-size: 1.5rem;
                }
            }
        }
    }

</style>
