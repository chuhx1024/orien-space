<template>
    <div class="ProductItem-container">
        <el-row class="type-page">
            <el-col class="left-content" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                ni
            </el-col>
            <el-col class="right-content" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <img class="right-content-img" src="/img/product/number_0.png" alt="">
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',

}
</script>

<style lang='scss' scoped>
    .ProductItem-container {
        background-color: #000;

        .left-content {
            text-align: left;
            height: 100px;
        }

        .right-content {
            text-align: right;

            .right-content-img {
                height: 300px;
            }
        }
    }

</style>
