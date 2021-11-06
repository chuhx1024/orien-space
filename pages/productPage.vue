<template>
    <div class="productPage-container">
        <banner-com
            url-source="/img/index/index_0.jpg"
            main-title="产品"
        >
            <p class="big">
                &quot;引力&quot;系列运载火箭
            </p>
        </banner-com>
        <div class="product-desc type-page">
            <template v-if="isMobile">
                <p class="product-desc-first">
                    打造从一次性使用到可回收重复使用和载人飞行等系列化、多样化的空天运输产品，快速形成低成本、 规模化、高效快捷的发射服务能力，覆盖LEO、SSO等各类型轨道。
                </p>
                <p class="product-desc-second">
                    将在短期内达到一流的航天发射水平，中期实现载人飞行商业化，长期规划实现近地行星探索商业化。
                </p>
            </template>
            <template v-else>
                <p class="product-desc-first">
                    打造从一次性使用到可回收重复使用和载人飞行等系列化、多样化的空天运输产品，快速形成低成本、
                </p>
                <p class="product-desc-first">
                    规模化、高效快捷的发射服务能力，覆盖LEO、SSO等各类型轨道。
                </p>
                <p class="product-desc-second">
                    将在短期内达到一流的航天发射水平，中期实现载人飞行商业化，长期规划实现近地行星探索商业化。
                </p>
            </template>
        </div>
        <el-row class="product-icon type-page">
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#Orien-a-4" />
                    </svg>
                    <h3 class="icon-title">
                        成熟可靠
                    </h3>
                    <p class="icon-desc">
                        完整经验火箭设计与服务团队保证
                    </p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#Orien-a-4" />
                    </svg>
                    <h3 class="icon-title">
                        超大运力
                    </h3>
                    <p class="icon-desc">
                        充分满足客户大批量发射能力与成本需求
                    </p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#Orien-a-4" />
                    </svg>
                    <h3 class="icon-title">
                        便捷发射
                    </h3>
                    <p class="icon-desc">
                        多种场地、快速响应
                    </p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#Orien-a-4" />
                    </svg>
                    <h3 class="icon-title">
                        高性能计算
                    </h3>
                    <p class="icon-desc">
                        将电子信息与航天充分融合
                    </p>
                </div>
            </el-col>
        </el-row>
        <div
            v-for="(item, index) in powerData"
            :id="item.id"
            :key="index"
            class="prower-container"
        >
            <el-row class="type-page" :type="isMobile ? '' : 'flex'" justify="space-between">
                <el-col style="order: 1;" class="right-content" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                    <img class="right-content-img" :src="`/img/product/number_${index}.png`" alt="">
                </el-col>
                <el-col class="left-content" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                    <div class="power-title">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="`#${item.icon}`" />
                        </svg>
                        <span class="num">
                            - {{ index + 1 }} 号
                        </span>
                    </div>
                    <p class="power-desc">
                        {{ item.disc }}
                    </p>
                    <div class="power-sub-title">
                        参数概览
                    </div>
                    <p
                        v-for="(spItem, spIndex) in item.item"
                        :key="spIndex"
                        class="power-desc-item"
                    >
                        <span class="fl">{{ spItem.disc }}</span>
                        <span class="fr">{{ spItem.unit }} </span>
                        <span class="fr">{{ spItem.num }}&nbsp;</span>
                    </p>
                    <div class="power-btn">
                        <el-button plain>
                            预约发射
                        </el-button>
                        <el-button plain>
                            预约观看
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
export default {
    name: 'ProductPage',
    components: { BannerCom },
    data () {
        return {

            powerData: [
                {
                    id: 'numberFirst',
                    icon: 'Orien-yinli-1',
                    disc: '创新的大型捆绑设计，兼具稳定的性能与极强运载能力，针对多种发射场景海陆兼容的设计，持续提升服务能力，使引力-1号成为商业发射的极佳选择',
                    item: [
                        { disc: '高度', num: 31, unit: '米' },
                        { disc: '整流罩直径', num: 4.2, unit: '米' },
                        { disc: '起飞重量', num: 420, unit: '吨' },
                        { disc: '起飞推力', num: 600, unit: '吨' },
                        { disc: '运载能力-近地轨道', num: 6.5, unit: '吨' },
                        { disc: '运载能力-太阳同步轨道', num: 3.5, unit: '吨' },
                    ],
                },
                {
                    id: 'numberSecond',
                    icon: 'Orien-yinli-2',
                    disc: '率先实现将固体大推力助推器与液体芯级相结合的设计，使引力2号满足更高轨道发射需求',
                    item: [
                        { disc: '高度', num: 52, unit: '米' },
                        { disc: '整流罩直径', num: 4.2, unit: '米' },
                        { disc: '起飞重量', num: 690, unit: '吨' },
                        { disc: '起飞推力', num: 'X00', unit: '吨' },
                        { disc: '运载能力-近地轨道', num: 15, unit: '吨' },
                        { disc: '运载能力-太阳同步轨道', num: 8, unit: '吨' },
                        { disc: '运载能力-地球同步轨道', num: 4, unit: '吨' },
                    ],
                },
                {
                    id: 'numberThird',
                    icon: 'Orien-yinli-3',
                    disc: '在实现极大运载能力的同时，引力3号可支持海上回收',
                    item: [
                        { disc: '高度', num: 52, unit: '米' },
                        { disc: '整流罩直径', num: 4.2, unit: '米' },
                        { disc: '起飞重量', num: 1100, unit: '吨' },
                        { disc: '起飞推力', num: 'X00', unit: '吨' },
                        { disc: '运载能力-近地轨道', num: 15, unit: '吨' },
                        { disc: '运载能力-太阳同步轨道', num: 15, unit: '吨' },
                        { disc: '运载能力-地球同步轨道', num: 7, unit: '吨' },
                    ],
                },
            ],
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },

}
</script>

<style lang='scss' scoped>
.productPage-container {
    color: #fff;
    background-color: #000;

    .product-desc {
        font-size: 17px;
        text-align: center;
        padding: 100px 15px 0;
        line-height: 23px;

        .product-desc-second {
            padding-top: 20px;
        }
    }

    .product-icon {
        padding: 100px 15px 180px;
        text-align: center;

        .icon {
            font-size: 47px;
            padding-top: 40px;
        }

        .icon-title {
            padding: 25px 0 8px;
            font-size: 20px;
            line-height: 27px;
        }

        .icon-desc {
            font-size: 13px;
            color: #c9caca;
            line-height: 18px;
            padding-bottom: 20px;
        }
    }

    .prower-container {
        background-color: #000;
        padding: 35px 15px;

        .left-content {
            text-align: left;
            padding-bottom: 135px;

            .power-title {
                font-size: 80px;
                font-weight: 500;
                line-height: 44px;

                .num {
                    font-size: 32px;
                    position: relative;
                    top: -26px;
                }
            }

            .power-desc {
                font-size: 12px;
                line-height: 17px;
            }

            .power-sub-title {
                padding-top: 28px;
                font-size: 20px;
                line-height: 32px;
            }

            .power-desc-item {
                height: 48px;
                line-height: 48px;
                border-bottom: 1px solid rgba(201, 202, 202, 0.39);
            }

            .power-btn {
                padding-top: 100px;

                /deep/.el-button {
                    background-color: transparent;
                    color: #fff;
                }

                &:nth-child(1) {
                    margin-right: 42px;
                }
            }
        }

        .right-content {
            text-align: center;
            padding-bottom: 135px;

            .right-content-img {
                height: 650px;
            }
        }
    }
}

</style>
