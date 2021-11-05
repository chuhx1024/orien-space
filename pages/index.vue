<template>
    <section class="home-page-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="东方空间完成4亿天使轮系列融资"
            banner-btn="了解更多"
        >
            <p class="big">
                东方空间天使轮由经纬、红杉，三一
            </p>
            <p class="big">
                重工天赋三江资本、SEE Fund等知名企业家
            </p>
            <p class="big">
                与投资人跟投
            </p>
        </banner-com>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'HomePage',
    components: { BannerCom },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
    },
}
</script>
<style lang='scss' scoped>
    .home-page-container {
        color: pink;
    }

</style>
