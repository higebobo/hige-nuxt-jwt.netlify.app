
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/auth/': { target: process.env.AUTH_API_ENDPOINT || 'http://localhost:8000/api', pathRewrite: {'^/auth/': ''} }
 },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login/', method: 'post', propertyName: 'access_token' },
          //user: { url: 'auth/user/', method: 'get', propertyName: '' }, // check token validation
          user: { url: 'auth/user/info/', method: 'get', propertyName: '' }, // without check token validation
          //logout: false
          logout: { url: 'auth/logout/', method: 'post'}
        }
      }
    }
  },
 /*
 auth: {
  localStorage: false,
  cookie: {
    options: {
      expires: 7
    }
  },
  strategies: {
    local: {
      token: {
        required: false,
        type: false
      },
      endpoints: {
        login: { url: 'auth/login/', method: 'post', propertyName: 'access_token' },
        user: { url: 'auth/user/', method: 'get', propertyName: '' },
        logout: { url: 'auth/logout/', method: 'post'}
      },
      maxAge: 10
    }
  }
},
*/
 /*
 auth: {
  strategies: {
    local: {
      scheme: "refresh",
      token: {
        property: 'access_token',
        maxAge: 10,
        // type: 'Bearer'
      },
      refreshToken: {
        property: "refresh_token",
        data: "refresh_token",
        maxAge: 60 * 15
      },
      endpoints: {
        login: {
          url: 'auth/login/',
          method: 'post',
          propertyName: 'access_token'
        },
        user:  {
          url: 'auth/user/',
          method: 'get', 
          propertyName: '' 
        },
        logout: { url: 'auth/logout/', method: 'post' }
      },
      autoLogout: false,
      tokenRequired: true,
      tokenType: 'Bearer '
    }
  },
},
*/
  vuetify: {
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    AUTH_API_ENDPOINT: process.env.AUTH_API_ENDPOINT,
    AUTH_PROVIDER: process.env.AUTH_PROVIDER
  }
}
