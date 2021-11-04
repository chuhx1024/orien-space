<template>
    <div class="BannerCom-container">
        <el-image class="wallpaper" src="/img/index/index_0.png" lazy alt="" />
        <el-image class="wallpaper" src="/img/index/index_1.png" lazy alt="" />
        <el-image class="wallpaper" src="/img/index/index_2.png" lazy alt="" />
        <el-image class="wallpaper" src="/img/index/index_3.png" lazy alt="" />
        <el-image class="wallpaper" src="/img/index/index_4.png" lazy alt="" />
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
