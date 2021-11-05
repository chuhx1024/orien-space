<template>
    <section class="about-page-container">
        <banner-com
            url-source="/img/about/about_banner.jpg"
            main-title="关于我们"
        />
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'AboutPage',
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
    .about-page-container {
        color: pink;
    }

</style>
