export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mercado_Eletronico',
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
  plugins: [
    '@/plugins/bootstrap-vue' //IMPORT BOOTSTRAP
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-fontawesome',
    //OR like this
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },

      ]
    }]
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }

  
}
