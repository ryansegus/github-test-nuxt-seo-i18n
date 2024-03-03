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
    urls: async () => {
      const services = ['seo', 'graphic-design', 'web-design']

      return services.map(() => ({
        loc: '/service-details-service',
        // From Docs
        // loc: '/about-us',
        // will be transformed into /en/about-us and /fr/about-us
        // What if about-us is also translated?
        // (/fr/a-propos)
        // as in my case, shouldn't pick the name from:

        /*
        defineI18nRoute({
          paths: {
            en: '/service-details/[service]',
            es: '/detalles-del-servicio/[service]',
            it: '/dettagli-del-servizio/[service]',
          },
        });
        */
        _i18nTransform: true,
      }))
    },
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
