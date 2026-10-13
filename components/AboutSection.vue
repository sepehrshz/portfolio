<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="about" class="border-t border-paper/10 py-24 md:py-36">
    <div class="wrap grid gap-14 md:grid-cols-12">
      <div v-reveal class="md:col-span-4">
        <p class="label mb-6">01 / About</p>
        <div class="relative aspect-[4/5] max-w-xs overflow-hidden border border-paper/15 bg-raised">
          <img v-if="site.portrait" :src="site.portrait" :alt="`Portrait of ${site.name}`"
            class="h-full w-full object-cover" loading="lazy">
          <div v-else class="flex h-full items-center justify-center font-serif text-[9rem] italic text-[#273bd2]/90"
            aria-hidden="true">{{ site.name[0] }}</div>
          <span class="label absolute bottom-3 left-3">{{ site.name }} {{ site.lastName }}</span>
        </div>
        <div v-reveal="100" class="mt-8 grid max-w-3xl gap-6 leading-relaxed text-paper/65 md:grid-cols-2">
          <p>I'm a developer who learns by building. Most of my work is full-stack web, with Nuxt and Vue on the front,
            and databases and APIs behind them.</p>
          <p>Lately I'm most curious about AI that does something useful: RAG systems that ground answers in real
            documents, and machine learning models on practical data.</p>
        </div>
      </div>
      <div class="md:col-span-8">
        <h2 v-reveal class="max-w-3xl text-[clamp(1.8rem,4vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.03em]">
          I like understanding a problem properly, designing the system around it, and turning the idea into
          working software.
        </h2>
        <div class="mt-14 grid gap-px border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(g, i) in site.stack" :key="g.title" v-reveal="i * 100" class="bg-ink p-6">
            <h3 class="label mb-6 !text-[#273bd2]">
              {{ g.title }}
            </h3>

            <ul class="space-y-5">
              <li v-for="skill in g.items" :key="skill.name">
                <div class="mb-2 flex items-center justify-between gap-3">
                  <span class="text-sm">{{ skill.name }}</span>
                  <span class="font-mono text-xs text-paper/45">
                    {{ skill.level }}%
                  </span>
                </div>

                <div class="h-1.5 overflow-hidden rounded-full bg-paper/10" role="progressbar"
                  :aria-label="`${skill.name} proficiency`" :aria-valuenow="skill.level" aria-valuemin="0"
                  aria-valuemax="100">
                  <div class="h-full rounded-full bg-[#273bd2] transition-[width] duration-700 ease-out"
                    :style="{ width: `${skill.level}%` }" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
