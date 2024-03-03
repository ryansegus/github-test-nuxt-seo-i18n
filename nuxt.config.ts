// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/seo'],

  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: true,
    cacheMaxAgeSeconds: 3600, // 1 hour
  },
  robots: {
    enabled: true,
  },
  seoExperiments: {
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
  linkChecker: {
    enabled: false,
  },
  i18n: {
    strategy: 'prefix',
    customBlocks: {
      defaultSFCLang: 'yaml',
      globalSFCScope: false,
    },
    // With per-component translations
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'En' },
      { code: 'es', iso: 'es-ES', name: 'Es' },
      { code: 'it', iso: 'it-IT', name: 'It' },
    ],
  },
});
