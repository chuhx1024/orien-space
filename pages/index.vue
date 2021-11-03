<template>
    <section>
        <banner-com />
        <el-button type="primary" @click="setIsMobile(0)">
            ann
        </el-button>
        <el-button type="primary" @click="setIsMobile(1)">
            ann
        </el-button>
        {{ isMobile }}
        {{ isMobile }}
        <el-button type="primary" @click="setIsMobile(true)">
            ann
        </el-button>
        <el-button type="primary" @click="setIsMobile(false)">
            ann
        </el-button>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    components: { BannerCom },
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
    },
}
</script>
