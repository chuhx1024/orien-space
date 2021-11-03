<template>
    <div>
        <ori-header />
        <nuxt />
        <ori-footer />
    </div>
</template>
<script>
import OriHeader from './components/OriHeader.vue'
import OriFooter from './components/OriFooter.vue'
import ResizeMinxin from './mixin/ResizeHandler'
export default {
    components: { OriHeader, OriFooter },
    mixins: [ResizeMinxin],
}
</script>
