<template>
    <section class="service-page-container">
        <banner-com
            url-source="/img/news/news_banner.png"
            main-title="东方空间完成4亿天使轮系列融资"
            banner-desc="东方空间完成4亿天使轮系列融资"
            banner-btn="了解更多"
        />
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'ServicePage',
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
    .service-page-container {
        color: pink;
    }

</style>
