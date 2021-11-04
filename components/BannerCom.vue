<template>
    <div class="BannerCom-container">
        <img class="wallpaper" :src="urlSource" alt="">
        <section class="banner-wallpaper">
            <h2 v-if="mainTitle" class="main-title">
                {{ mainTitle }}
            </h2>
            <p v-if="bannerDesc" class="banner-desc">
                {{ bannerDesc }}
            </p>
            <div v-if="bannerBtn" class="banner-btn">
                <el-button type="primary">
                    {{ bannerBtn }}
                </el-button>
            </div>
        </section>
    </div>
</template>

<script>
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
        bannerDesc: {
            type: String,
            default: '',
        },
        bannerBtn: {
            type: String,
            default: '',
        },

    },

}
</script>

<style lang='scss' scoped>
    .BannerCom-container {
        position: relative;

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
            text-align: center;

            .main-title {
                color: #fff;
                font-size: 55px;
            }

            .banner-desc {
                margin-top: 60px;
                font-size: 38px;
                font-weight: 100;
            }

            .banner-btn {
                margin-top: 245px;
            }
        }
    }

</style>
