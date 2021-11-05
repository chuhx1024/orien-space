<template>
    <section class="join-page-container">
        <banner-com
            url-source="/img/join/join_banner.jpg"
            main-title="加入我们"
        >
            <p class="small">
                东方空间希望对空间探索，航天技术有梦想的有志之士加入我们，让我们一起努力，拓展人类边界；
            </p>
            <p class="small">
                我们为您提供具有市场竞争力的薪酬，期权，六险一金，挑战性的工作任务和人文的工作环境。
            </p>
        </banner-com>
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
