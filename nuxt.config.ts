// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/JSearch",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      API_KEY: process.env.NUXT_API_KEY,
    },
  },
  // nuxt.config.ts

  modules: ['@formkit/auto-animate/nuxt', '@nuxtjs/google-fonts'],
  googleFonts: {
    download: true,
    families: {
      "Noto Sans TC": true
    }
  }


});
