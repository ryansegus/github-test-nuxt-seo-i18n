<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n';

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const filteredLocales = computed<LocaleObject[]>(() =>
  (locales.value as LocaleObject[]).filter(({ code }) => code !== locale.value)
);
</script>

<template>
  <div>
    <span
      >CURRENT LOCALE: <strong>{{ locale }}</strong></span
    >
    <div class="c-lang">
      <NuxtLink
        v-for="{ code, name } in filteredLocales"
        :key="code"
        :to="switchLocalePath(code)"
        no-prefetch
      >
        <span>{{ name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.c-lang {
  display: flex;
  gap: 1em;
}
</style>
