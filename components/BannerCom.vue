<template>
    <div class="BannerCom-container">
        <img class="wallpaper" src="/img/index/index_0.png" alt="">
        <section class="banner-wallpaper">
            <h2 class="main-title">
                东方通信
            </h2>
            <p class="banner-desc">
                东方公司说东方公司说东方公司说东方公司说东方公司说东方公司说
            </p>
            <div class="banner-btn">
                <el-button>
                    按钮按钮
                </el-button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BannerCom',

}
</script>

<style lang='scss' scoped>
    .BannerCom-container {
        color: pink;
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

            .banner-btn {
                margin-top: 300px;
            }
        }
    }

</style>
