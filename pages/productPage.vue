<template>
    <div class="productPage-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="产品"
        >
            <p class="big">
                &quot;引力&quot;系列运载火箭
            </p>
        </banner-com>
        <div class="product-desc type-page">
            <p class="product-desc-first">
                打造从一次性使用到可回收重复使用和载人飞行等系列化、多样化的空天运输产品，快速形成低成本、
            </p>
            <p class="product-desc-first">
                规模化、高效快捷的发射服务能力，覆盖LEO、SSO等各类型轨道。
            </p>
            <p class="product-desc-second">
                将在短期内达到一流的航天发射水平，中期实现载人飞行商业化，长期规划实现近地行星探索商业化。
            </p>
        </div>
        <el-row class="product-icon" :gutter="20">
            <el-col :span="6">
                <div>
                    <svg class="icon logo-img" aria-hidden="true">
                        <use xlink:href="#Orien-a-4" />
                    </svg>
                    <h3 class="icon-title">
                        成熟可靠
                    </h3>
                    <p class="icon-desc">
                        完整经验火箭设计与服务团队保证
                    </p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" />
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" />
            </el-col>
        </el-row>
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
    color: #fff;
    background-color: #000;

    .product-desc {
        font-size: 17px;
        text-align: center;
        padding: 100px 15px 0;
        line-height: 23px;

        .product-desc-second {
            padding-top: 20px;
        }
    }
}

</style>
