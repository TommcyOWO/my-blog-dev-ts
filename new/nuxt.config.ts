// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['@/assets/style.css','@/assets/Transition.css'],
  modules:[
    '@nuxtjs/i18n','@vueuse/nuxt'
  ],
  app:{
    head: {
      titleTemplate: 'Tomycat 的部落格',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Meta description' }
      ]
    }
  },
  i18n:{
    vueI18n:'./i18n.config.ts'
  }
})
