<template>
    <div class="productPage-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="产品"
            banner-desc="&quot;引力&quot;系列运载火箭"
        />
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
