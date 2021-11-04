
<template>
    <section class="newsPage-container">
        <banner-com
            url-source="/img/news/news_banner.png"
            main-title="新闻"
        />
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'NewsPage',
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
    .newsPage-container {
        color: pink;
    }

</style>
