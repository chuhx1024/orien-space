<template>
    <section class="service-page-container">
        <banner-com-small
            url-source="/img/join/join_banner.jpg"
            main-title="服务"
        />
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
        color: pink;
    }

</style>
