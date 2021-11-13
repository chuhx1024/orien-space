<template>
    <div ref="ourTechItem" class="OurTechItem-container" :class="{isMobile}">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="contentText" @click="hiddenWindow('productPage', 'numberFirst')">
                    引力 — 1号
                </div>
                <div class="contentText" @click="hiddenWindow('productPage', 'numberSecond')">
                    引力 — 2号
                </div>
                <div class="contentText" @click="hiddenWindow('productPage', 'numberThird')">
                    引力 — 3号
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { goToHash } from '@/utiles/tool.js'
export default {
    name: 'OurTechItem',
    computed: {
        ...mapState({
            isMobile: state => state.isMobile,
            lang: state => state.lang,
        }),
    },
    methods: {
        hiddenWindow (path, hash) {
            goToHash.call(this, path, hash)
            this.$emit('closeItem', 'ourTech')
        },
    },

}
</script>

<style lang='scss' scoped>
    .OurTechItem-container {
        background-color: #000;
        margin-top: -11px;
        font-size: 14px;
        padding: 10px 0;
        line-height: 30px;
        border-top: 2px solid $--color-primary;
        color: #fff;
        white-space: nowrap;

        .contentText {
            padding: 10px 20px;

            &:hover {
                color: $--color-primary;
                background-color: #0f2640;
            }
        }

        &.isMobile {
            font-size: 12px;
            padding: 0 36px;
        }
    }
</style>
