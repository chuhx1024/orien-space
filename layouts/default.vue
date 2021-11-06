<template>
    <div :class="{isPC: !isMobile}">
        <ori-header />
        <nuxt />
        <ori-footer />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import OriHeader from './components/OriHeader.vue'
import OriFooter from './components/OriFooter.vue'
import ResizeMinxin from './mixin/ResizeHandler'
export default {
    components: { OriHeader, OriFooter },
    mixins: [ResizeMinxin],
    computed: {
        ...mapState('app', ['isMobile']),
    },
}
</script>
<style lang='scss' scoped>
// .isPC {
//     // min-width: 1200px;
// }
</style>
