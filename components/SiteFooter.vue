<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <footer class="border-t border-paper/10 py-8">
    <div class="wrap flex flex-col justify-between gap-4 font-mono text-xs text-mute md:flex-row">
      <p>© {{ new Date().getFullYear() }} {{ site.name }} {{ site.lastName }}</p>
      <p>Designed and built by hand with Nuxt and Tailwind.</p>
      <ul class="flex gap-5">
        <li v-for="s in site.socials" :key="s.label"><a :href="s.href" target="_blank" rel="noopener"
            class="hover:text-[#273bd2]">{{ s.label }}</a></li>
      </ul>
    </div>
  </footer>
</template>
