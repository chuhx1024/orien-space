<template>
    <div class="light-beam-container" :class="{isMobile}">
        <div class="light-beam" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('app', ['isMobile']),
    },
}
</script>
<style lang='scss' scoped>
.light-beam-container {
    background-color: #000;
    padding: 60px 0 17px;
    height: 85px;
    position: relative;

    .light-beam {
        position: absolute;
        left: 50%;
        top: 60px;
        width: 2px;
        height: 85px;
        background: linear-gradient(180deg, #2961b7 0%, rgba(18, 50, 128, 0.35) 100%);
        animation: 4s floatItem ease infinite;
    }

    @keyframes floatItem {
        0% {
            opacity: 0;
            height: 0;
            top: 145px;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }

    &.isMobile {
        padding: 0 0 17px;
        height: 55px;

        .light-beam {
            left: 50%;
            top: 10px;
            width: 2px;
            height: 45px;
            background: linear-gradient(180deg, #2961b7 0%, rgba(18, 50, 128, 0.35) 100%);
            animation: 4s floatItem ease infinite;
        }
    }
}
</style>
