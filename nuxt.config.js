export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'emes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // modules: [
  //   '@woocommerce/woocommerce-rest-api',
  // ],

  plugins: [
    '~/plugins/woocommerce',
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // '@woocommerce/woocommerce-rest-api',
    '@nuxtjs/axios'
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
