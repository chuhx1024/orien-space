<template>
    <section class="join-page-container">
        <banner-com
            url-source="/img/news/news_banner.png"
            main-title="加入我们"
            banner-desc="东方空间完成4亿天使轮系列融资"
        />
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'JoinPage',
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
    .join-page-container {
        color: pink;
    }

</style>
