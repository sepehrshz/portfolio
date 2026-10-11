<script setup lang="ts">
import { site } from '~/data/site'
const el = ref<HTMLElement>()
function move(e: PointerEvent) {
  const r = el.value!.getBoundingClientRect()
  el.value!.style.setProperty('--x', `${e.clientX - r.left}px`)
  el.value!.style.setProperty('--y', `${e.clientY - r.top}px`)
}
</script>

<template>
  <section id="top" ref="el" class="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32"
    style="--x:70%;--y:30%" @pointermove="move">
    <!-- grid + pointer-reactive highlight -->
    <div class="pointer-events-none absolute inset-0 opacity-[0.07]"
      style="background-image:linear-gradient(#f1ede4 1px,transparent 1px),linear-gradient(90deg,#f1ede4 1px,transparent 1px);background-size:64px 64px" />
    <div class="pointer-events-none absolute inset-0 opacity-40"
      style="background-image:linear-gradient(#3045e1 1px,transparent 1px),linear-gradient(90deg,#3045e1 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(240px circle at var(--x) var(--y),#000,transparent);mask-image:radial-gradient(240px circle at var(--x) var(--y),#000,transparent)" />

    <!-- system diagram motif -->
    <svg class="pointer-events-none absolute right-[-3%] top-24 hidden w-[34%] max-w-[460px] text-paper/20 lg:block"
      viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <g stroke="currentColor" stroke-width="1">
        <rect x="10" y="40" width="90" height="44" />
        <rect x="150" y="10" width="90" height="44" />
        <rect x="150" y="120" width="90" height="44" />
        <rect x="290" y="65" width="100" height="60" />
        <rect x="150" y="230" width="90" height="44" />
      </g>
      <g stroke="#3045e1" stroke-width="1.2" class="flow">
        <path d="M100 62H125V32H150" />
        <path d="M100 62H125V142H150" />
        <path d="M240 32H265V95H290" />
        <path d="M240 142H265V95H290" />
        <path d="M195 164V230" />
      </g>
      <circle cx="340" cy="95" r="4" fill="#3045e1" class="pulse" />
      <g fill="currentColor" font-family="ui-monospace,monospace" font-size="9">
        <text x="22" y="66">client</text><text x="162" y="36">api</text><text x="162" y="146">db</text>
        <text x="302" y="99">llm / rag</text><text x="162" y="256">vector</text>
      </g>
    </svg>

    <div class="wrap relative">
      <p v-reveal class="label mb-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span>Full-Stack Developer / AI Enthusiast</span>
        <span v-if="site.available.show" class="flex items-center gap-2 text-paper/80">
          <i class="pulse inline-block h-1.5 w-1.5 rounded-full bg-[#273bd2]" />{{ site.available.label }}
        </span>
      </p>
      <h1 v-reveal="100"
        class="max-w-[18ch] text-[clamp(2.6rem,7.4vw,6.75rem)] font-medium leading-[0.93] tracking-[-0.045em]">
        I build digital products where engineering meets
        <em class="font-serif font-normal italic text-[#273bd2]">intelligence.</em>
      </h1>
      <div class="mt-12 grid items-end gap-8 border-t border-paper/10 pt-8 md:grid-cols-[1fr_auto]">
        <p v-reveal="250" class="max-w-md text-lg leading-relaxed text-paper/70">
          I'm {{ site.name }}. I build web applications end to end and explore practical AI, from retrieval systems to
          machine learning models, one real project at a time.
        </p>
        <div v-reveal="350" class="flex flex-wrap gap-3">
          <a href="#work" class="btn-solid">Explore My Work <span aria-hidden="true">↓</span></a>
          <a href="#contact" class="btn-line">Let's Talk</a>
        </div>
      </div>
    </div>
  </section>
</template>
