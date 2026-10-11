<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="border-t border-paper/10 py-24 md:py-36">
    <div class="wrap">
      <h2 v-reveal class="label mb-14">03 / How I work</h2>
      <div class="relative">
        <div
          class="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-paper/15 md:left-0 md:top-[5px] md:h-px md:w-full"
          aria-hidden="true" />
        <ol class="relative grid gap-12 md:grid-cols-4 md:gap-8">
          <li v-for="([t, d], i) in site.process" :key="t" v-reveal="i * 120" class="relative pl-8 md:pl-0 md:pt-10">
            <span class="absolute left-0 top-1 h-[11px] w-[11px] border border-[#273bd2] md:top-0"
              :class="i === 3 ? 'bg-[#273bd2]' : 'bg-ink'" />
            <p class="font-mono text-xs text-[#273bd2]">0{{ i + 1 }}</p>
            <h3 class="mt-2 font-serif text-3xl">{{ t }}</h3>
            <p class="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/60">{{ d }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
