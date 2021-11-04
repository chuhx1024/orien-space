<template>
    <div class="productPage-container">
        <banner-com />
        <ProductItem id="numberFirst" />
        <ProductItem id="numberSecond" />
        <ProductItem id="numberThird" />
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'ProductPage',
    components: { ProductItem, BannerCom },

}
</script>

<style lang='scss' scoped>
    .productPage-container {
        color: pink;
    }

</style>
