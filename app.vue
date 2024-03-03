<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <header>
      <nav>
        <NuxtLink
          :to="
            localePath({
              name: 'service-details-service',
              params: { service: 'test' },
            })
          "
          >service</NuxtLink
        >
        |
        <NuxtLink to="sitemap_index.xml">sitemap</NuxtLink>
      </nav>
    </header>
    <main>
      <LocaleSwitcher />
      <NuxtPage />
      <pre>{{ $route }}</pre>
    </main>
  </div>
</template>
