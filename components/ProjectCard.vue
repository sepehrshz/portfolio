<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ project: Project; wide?: boolean }>()
</script>

<template>
  <article
    class="group grid h-full border border-paper/10 bg-ink transition-colors duration-500 hover:border-[#273bd2]/50"
    :class="wide ? 'md:grid-cols-[1.15fr_1fr]' : 'grid-rows-[auto_1fr]'">
    <div class="overflow-hidden" :class="wide ? 'md:order-2' : ''">
      <div class="h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <ProjectVisual :kind="project.visual" />
      </div>
    </div>
    <div class="flex flex-col p-6 md:p-9">
      <div class="label mb-6 flex justify-between"><span>Project {{ project.no }}</span><span
          class="text-[#273bd2] transition-transform duration-300 group-hover:translate-x-1">→</span></div>
      <h3 class="font-serif text-4xl leading-none tracking-tight md:text-5xl">{{ project.name }}</h3>
      <p class="mt-5 max-w-md leading-relaxed text-paper/65">{{ project.problem }}</p>
      <div v-if="project.built.length || project.planned.length" class="mt-5 space-y-1 font-mono text-xs text-paper/70">
        <p v-for="b in project.built" :key="b"><span class="text-[#273bd2]">✓ built</span> {{ b }}</p>
        <p v-for="p in project.planned" :key="p"><span class="text-mute">○ planned</span> {{ p }}</p>
      </div>
      <ul class="mt-6 flex flex-wrap gap-2">
        <li v-for="t in project.tags" :key="t" class="tag">{{ t }}</li>
      </ul>
      <div class="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8 text-sm">
        <template v-for="l in project.links" :key="l.label">
          <a v-if="l.href !== '#'" :href="l.href" class="ulink" target="_blank" rel="noopener">{{ l.label }} ↗</a>
          <span v-else class="cursor-default text-paper/35" title="Link coming soon">{{ l.label }} <span
              class="font-mono text-[10px] uppercase tracking-wider">soon</span></span>
        </template>
      </div>
    </div>
  </article>
</template>
