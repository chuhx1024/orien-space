<template>
    <div class="BannerCom-container">
        <img class="wallpaper" src="/img/index/index_banner.jpg" alt="">
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
