<template>
    <div ref="productItem" class="ProductItem-container" :class="{isMobile}">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="contentText" @click="hiddenWindow('productPage', 'numberFirst')">
                    <el-menu-item index="/productPage">
                        引力 — 1号
                    </el-menu-item>
                </div>
                <div class="contentText" @click="hiddenWindow('productPage', 'numberSecond')">
                    <el-menu-item index="/productPage-1">
                        引力 — 2号
                    </el-menu-item>
                </div>
                <div class="contentText" @click="hiddenWindow('productPage', 'numberThird')">
                    <el-menu-item index="/productPage-2">
                        引力 — 3号
                    </el-menu-item>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { goToHash } from '@/utiles/tool.js'
export default {
    name: 'ProductItem',
    computed: {
        ...mapState('app', ['isMobile']),
    },
    mounted () {
        this.setMargin()
    },
    methods: {
        hiddenWindow (path, hash) {
            goToHash.call(this, path, hash)
            this.$emit('closeItem', 'ourTech')
        },
        // PC 端 修改位置
        setMargin () {
            if (!this.isMobile) {
                this.$refs.productItem.parentNode.parentNode.style.marginLeft = '-12px'
            }
        },
    },

}
</script>

<style lang='scss' scoped>
    .ProductItem-container {
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
            // padding: 10px 15px;

            .contentText {
                padding: 5px 0;

                /deep/.el-menu-item {
                    padding-left: 0 !important;
                }
            }
        }
    }
</style>
