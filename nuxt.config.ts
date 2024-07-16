// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// @ts-ignore
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    mailgunKey: '',
    // Keys within public, will be also exposed to the client-side
    public: {
      mailgunKey:'',
      mailgunDomain:''
    }
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
