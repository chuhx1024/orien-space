<template>
    <div class="productPage-container">
        <banner-com
            url-source="/img/product/banner_0.jpg"
            main-title="产品"
        >
            <p class="big">
                &quot;引力&quot;系列运载火箭
            </p>
        </banner-com>
        <light-beam />
        <div class="product-desc type-page" :class="{isMobile}">
            <p class="product-desc-first">
                东方空间通过“引力”系列运载火箭的研发，打造一次性使用、可回收重复使用和载人飞行等系列化、多样化的空天运输产品，快速形成低成本、规模化、高效快捷的发射服务能力，覆盖LEO、SSO、GTO、GEO等各类轨道。
            </p>
            <p class="product-desc-second">
                将在短期内达到一流的航天发射水平，中期实现载人飞行商业化，长期规划实现近地行星探索商业化。
            </p>
        </div>
        <el-row class="product-icon type-page" :class="{isMobile}">
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#Orien-weibo" />
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
                        <use xlink:href="#Orien-a-123" />
                    </svg>
                    <h3 class="icon-title">
                        超大运力
                    </h3>
                    <p class="icon-desc">
                        充分满足客户大批量发射能力与成本控制需求
                    </p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#Orien-bianzu" />
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
                        <use xlink:href="#Orien-a-cpuchuliqizhongyangchuliqixinpian" />
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
            :class="{isMobile}"
        >
            <el-row class="type-page" :type="isMobile ? '' : 'flex'" justify="space-between">
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
                        <span class="fr" style="color: #c9caca;">{{ spItem.unit }} </span>
                        <span class="fr">&nbsp;</span>
                        <span class="fr" v-html="spItem.num" />
                    </p>
                    <div class="power-btn">
                        <el-button :size="isMobile? 'mini': 'medium'" type="primary" plain @click="gotoMail('bd@orienspace.com')">
                            预约发射
                        </el-button>
                        <el-button :size="isMobile? 'mini': 'medium'" type="primary" plain @click="gotoMail('bd@orienspace.com')">
                            预约观看
                        </el-button>
                    </div>
                </el-col>
                <el-col class="right-content" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                    <img class="right-content-img" :src="`/img/product/number_${index}.jpg`" alt="">
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerCom from '../components/BannerCom.vue'
import { gotoMail } from '@/utiles/tool.js'
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
                        { disc: '整流罩直径', num: '3.8 <span style="color: #c9caca;">米</span> / 4.2', unit: '米' },
                        { disc: '起飞重量', num: 420, unit: '吨' },
                        { disc: '起飞推力', num: 600, unit: '吨' },
                        { disc: '运载能力-近地轨道', num: 6.5, unit: '吨' },
                        { disc: '运载能力-太阳同步轨道', num: 3.5, unit: '吨' },
                    ],
                },
                {
                    id: 'numberSecond',
                    icon: 'Orien-yinli-2',
                    disc: '实现将固体大推力助推器与液体芯级相结合设计，使引力2号满足更高轨道发射需求，实现部分回收，重复使用。',
                    item: [
                        { disc: '高度', num: 52, unit: '米' },
                        { disc: '整流罩直径', num: '4.2 <span style="color: #c9caca;">米</span> / 5', unit: '米' },
                        { disc: '起飞重量', num: 690, unit: '吨' },
                        { disc: '起飞推力', num: 900, unit: '吨' },
                        { disc: '运载能力-近地轨道', num: 15, unit: '吨' },
                        { disc: '运载能力-太阳同步轨道', num: 8, unit: '吨' },
                        { disc: '运载能力-地球同步转移轨道', num: 4, unit: '吨' },
                    ],
                },
                {
                    id: 'numberThird',
                    icon: 'Orien-yinli-3',
                    disc: '在实现极大运载能力的同时，引力3号可支持海上回收',
                    item: [
                        { disc: '高度', num: 52, unit: '米' },
                        { disc: '整流罩直径', num: '4.2 <span style="color: #c9caca;">米</span> / 5', unit: '米' },
                        { disc: '起飞重量', num: 1100, unit: '吨' },
                        { disc: '起飞推力', num: 1450, unit: '吨' },
                        { disc: '运载能力-近地轨道', num: 30, unit: '吨' },
                        { disc: '运载能力-太阳同步轨道', num: 15, unit: '吨' },
                        { disc: '运载能力-地球同步转移轨道', num: 7, unit: '吨' },
                    ],
                },
            ],
        }
    },
    computed: {
        ...mapState('app', ['isMobile']),
    },

    methods: {
        gotoMail,
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
        padding: 58px 15px;
        line-height: 23px;

        .product-desc-second {
            padding-top: 20px;
        }

        &.isMobile {
            font-size: 12px;
            color: #c9caca;
        }
    }

    .product-icon {
        padding: 100px 15px 180px;
        text-align: center;

        .icon {
            color: #009dde;
            font-size: 47px;
            padding-top: 40px;
            opacity: 0.5;
        }

        .icon-title {
            padding: 25px 0 8px;
            font-size: 20px;
            line-height: 27px;
        }

        .icon-desc {
            font-size: 14px;
            color: #c9caca;
            line-height: 20px;
            padding-bottom: 20px;
        }

        &.isMobile {
            padding: 30px 15px 60px;
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
                font-size: 14px;
                line-height: 21px;
                color: #c9caca;
            }

            .power-sub-title {
                padding-top: 28px;
                font-size: 20px;
                line-height: 32px;
            }

            .power-desc-item {
                height: 48px;
                font-size: 13px;
                line-height: 48px;
                border-bottom: 1px solid rgba(201, 202, 202, 0.39);
            }

            .power-btn {
                padding-top: 100px;

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

        &.isMobile {
            padding: 10px 15px;

            .left-content {
                .power-desc {
                    font-size: 12px;
                    color: #c9caca;
                    line-height: 18px;
                }

                .power-btn {
                    padding-top: 50px;
                }
            }
        }
    }
}

</style>
