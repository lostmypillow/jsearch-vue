// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {baseURL: "/JSearch"},
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      API_KEY: process.env.NUXT_API_KEY
    }
  }
})
