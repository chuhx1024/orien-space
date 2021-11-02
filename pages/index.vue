<template>
    <section>
        <!-- <Tutorial /> -->
        <el-button type="primary" @click="setIsMobile(0)">
            ann
        </el-button>
        <el-button type="primary" @click="setIsMobile(1)">
            ann
        </el-button>
        <el-input placeholder="请输入内容" />
        {{ isMobile }}
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('app', ['isMobile']),
    },
    methods: {
        ...mapActions('app', ['setIsMobile']),
    },
}
</script>
