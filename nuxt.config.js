import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JD skillar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css' },
      { rel: 'stylesheet',class:'ar_external_style',  href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.rtl.min.css' },
    ],
    script:[
      {src:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js'},
      {src:'https://cdn.ckeditor.com/ckeditor5/36.0.1/classic/ckeditor.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.41.0/apexcharts.min.js'},
      {src:'https://www.google.com/recaptcha/api.js'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss',
  ],
  publicRuntimeConfig: {
    url: process.env.baseUrl,
  },
  alias: {
    'images': resolve(__dirname, './assets/images'),
    'style': resolve(__dirname, './assets/scss'),

  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/checkStyle.js',mode:'client'},
    {src:'~/plugins/jquery_plugin',mode:'client'},
    {src:'~/plugins/sweet_alert',mode:'client'},
   // {src:'~/plugins/text_editor',mode:'client'},
    {src:'~/plugins/tooltip_plugin',mode:'client'},
    {src:'~/plugins/axios'},
    {src:'~/plugins/loader',mode:'client'},
    {src:'~/plugins/AutoCompleteTags',mode:'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
   // RECAPTCHA_SITE_KEY:'6LfvFEclAAAAAFBdk7D9g0MePCnSpil7pyumkMjA'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/sitemap'
    /*'@nuxtjs/recaptcha'*/
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://jd.skillar.com',
    cacheTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    generate: true, // Enable dynamic generation
    async routes() {
      // Get the Nuxt.js pages routes
      const pagesRoutes = require('./router.js').default.routes;
      const staticRoutes = ['/about-us', '/privacy', '/terms','/conditions'];

      // Filter and extract the dynamic routes
      const dynamicRoutes = pagesRoutes
        .filter(route => {
          // Exclude dashboard routes
          if (route.path.includes('/dashboard/')) {
            return false;
          }
          // Exclude other routes you want to exclude
          // Add more conditions if needed

          // Include all other dynamic routes
          return true;
        })
        .map(route => route.path);

      // Concatenate static and dynamic routes
      const allRoutes = staticRoutes.concat(dynamicRoutes);

      return allRoutes;
    },
  },
  /*recaptcha: {
    /!* reCAPTCHA options *!/
    siteKey: '6LfvFEclAAAAAFBdk7D9g0MePCnSpil7pyumkMjA', // for example,
    hideBadge: false,
    size: 'invisible',
    version: 2
  },*/

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
     baseURL: 'http://localhost:8000/api/',
     //baseURL: 'https://jd-api.skillar.com/api',
    // proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders:  {
      vue: {
        prettify: false
      }
    }
  },
  router: {
    middleware: ['auth_check'],
  },
  auth: {
    redirect: {
      login: '/auth/login',
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  }
}
