<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="work" class="border-t border-paper/10 py-24 md:py-36">
    <div class="wrap">
      <header v-reveal class="mb-14 flex items-end justify-between gap-6">
        <h2 class="text-[clamp(2.2rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em]">Selected work</h2>
        <span class="label hidden md:block">01 / Work</span>
      </header>
      <div class="grid gap-5 md:grid-cols-12">
        <div v-reveal class="md:col-span-12"><ProjectCard :project="site.projects[0]" wide /></div>
        <div v-reveal="100" class="md:col-span-7"><ProjectCard :project="site.projects[1]" /></div>
        <div v-reveal="200" class="md:col-span-5"><ProjectCard :project="site.projects[2]" /></div>
      </div>
    </div>
  </section>
</template>
