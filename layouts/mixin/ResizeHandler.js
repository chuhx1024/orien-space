
const WIDTH = 992 // refer to Bootstrap's responsive design
const SCREEN = 1200 // refer to Bootstrap's responsive design

export default {
    beforeMount () {
        window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.$_resizeHandler)
    },
    mounted () {
        const isMobile = this.$_isMobile()
        const isSmallScreen = this.$_isSmallScreen()
        this.$store.dispatch('app/setIsMobile', isMobile)
        if (isSmallScreen) {
            this.$store.dispatch('app/setIsSmallScreen', isSmallScreen)
        }
    },
    methods: {
        $_isMobile () {
            const rect = document.body.getBoundingClientRect()
            document.documentElement.style.fontSize = (rect.width / 120) + 'px'
            return rect.width - 1 < WIDTH
        },
        $_isSmallScreen () {
            const rect = document.body.getBoundingClientRect()
            return rect.width - 1 < SCREEN
        },
        $_resizeHandler () {
            if (!document.hidden) {
                const isMobile = this.$_isMobile()
                const isSmallScreen = this.$_isSmallScreen()
                this.$store.dispatch('app/setIsMobile', isMobile)
                this.$store.dispatch('app/setIsSmallScreen', isSmallScreen)
            }
        },
    },
}
