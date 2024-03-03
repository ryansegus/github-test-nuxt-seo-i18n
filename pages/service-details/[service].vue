<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: '/service-details/[service]',
    es: '/detalles-del-servicio/[service]',
    it: '/dettagli-del-servizio/[service]',
  },
});

const route = useRoute();
const localePath = useLocalePath();
const { t, locale: localeRef } = useI18n({ useScope: 'local' });
</script>

<template>
  <div>SERVICE</div>
</template>

<i18n lang="yaml">
it:
  ogTitle: Visiona il servizio {currentService}
  moreServices: Altri servizi
en:
  ogTitle: Check out {currentService}'s service
  moreServices: More Services
es:
  ogTitle: Mira el servicio {currentService}
  moreServices: Otros Servicios
</i18n>
