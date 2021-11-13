<template>
    <section class="service-page-container">
        <banner-com-small
            url-source="/img/service/service_1.jpg"
            main-title="Are you ready to go universe？"
        >
            <p class="big" style="color: #fff;">
                你准备好出发去太空了吗？
            </p>
        </banner-com-small>
        <div class="service-title" :class="{isMobile: isMobile}">
            <p class="desc">
                太空物流
            </p>
            <p class="mark">
                使用“引力”系列运载火箭，打造系列化、多样化的空天运输产品，为您提供低成本、规模化、高效快捷的。
            </p>
            <p class="mark">
                发射服务，覆盖LEO、SSO等各类型轨道
            </p>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerComSmall from '../components/BannerComSmall.vue'
export default {
    name: 'ServicePage',
    components: { BannerComSmall },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
    },
}
</script>
<style lang='scss' scoped>
    .service-page-container {
        .service-title {
            background-color: #000;
            text-align: center;
            color: #fff;
            padding-top: 8rem;

            .desc {
                font-size: 3.3rem;
                line-height: 3.3rem;
                padding-bottom: 2.3rem;
            }

            .mark {
                font-size: 1.7rem;
                line-height: 3.2rem;
                padding-bottom: 3.8rem;
            }
        }
    }

</style>
