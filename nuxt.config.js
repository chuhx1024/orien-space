export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '东方空间',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [
            {
                type: 'text/javascript',
                // src: '//100859.kefu.easemob.com/webim/easemob.js?configId=73273a76-cec6-4b6e-9a1f-187af9035e25',
                src: '//100859.kefu.easemob.com/webim/easemob.js?configId=73273a76-cec6-4b6e-9a1f-187af9035e25',
                body: true,
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'normalize.css/normalize.css',
        { src: '~assets/css/variables.scss', lang: 'scss' },
        { src: '~assets/css/index.scss', lang: 'scss' },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        { src: '~/plugins/iconfont', ssr: false },
        { src: '~/plugins/carouse', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: [
            './assets/css/variables.scss', // 自己项目中的样式文件的路径
        ],
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // transpile: [/^element-ui/],
        babel: {
            'plugins': [
                [
                    'component',
                    {
                        'libraryName': 'element-ui',
                        'styleLibraryName': 'theme-chalk',
                    },
                ],
            ],
        },
    },
    server: {
        port: 80, // default: 3000
        host: '0.0.0.0', // default: localhost,
    },
}
