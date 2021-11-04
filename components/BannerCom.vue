<template>
    <div class="BannerCom-container">
        <img class="wallpaper" src="/img/index/index_0.png" alt="">
        <img class="wallpaper" src="/img/index/index_1.png" alt="">
        <img class="wallpaper" src="/img/index/index_2.png" alt="">
        <img class="wallpaper" src="/img/index/index_3.png" alt="">
        <img class="wallpaper" src="/img/index/index_4.png" alt="">
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

        .wallpaper {
            width: 100%;
            background-size: cover;
        }
    }

</style>
