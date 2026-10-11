<script setup lang="ts">
import { site } from '~/data/site'
const open = ref(false)
const scrolled = ref(false)
const links = [['Selected Work', '#work'], ['About', '#about'], ['Contact', '#contact']]
const onScroll = () => (scrolled.value = window.scrollY > 24)
const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (open.value = false)
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) })
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="scrolled || open ? 'border-b border-paper/10 bg-ink/90 backdrop-blur' : ''">
    <nav class="wrap flex h-16 items-center justify-between" aria-label="Primary">
      <a href="#top" class="font-mono text-sm tracking-tight" @click="open = false">
        {{ site.name.toLowerCase() }}<span class="text-[#273bd2]">/</span>dev
      </a>
      <ul class="hidden items-center gap-9 md:flex">
        <li v-for="[l, h] in links" :key="h"><a :href="h" class="ulink text-sm text-paper/80 hover:text-paper">{{ l
            }}</a></li>
        <li><a href="#contact" class="btn-solid !py-2">{{ site.available.show ? 'Available for work' : 'Get in touch'
            }}</a></li>
      </ul>
      <button class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" :aria-expanded="open"
        aria-controls="mobile-menu" aria-label="Toggle menu" @click="open = !open">
        <span class="h-px w-6 bg-paper transition-transform" :class="open && 'translate-y-[3.5px] rotate-45'" />
        <span class="h-px w-6 bg-paper transition-transform" :class="open && '-translate-y-[3.5px] -rotate-45'" />
      </button>
    </nav>
    <div id="mobile-menu" v-show="open" class="border-t border-paper/10 bg-ink md:hidden">
      <ul class="wrap flex flex-col py-6">
        <li v-for="[l, h] in links" :key="h" class="border-b border-paper/10">
          <a :href="h" class="block py-4 font-serif text-3xl" @click="open = false">{{ l }}</a>
        </li>
        <li class="pt-6"><a href="#contact" class="btn-solid" @click="open = false">Let's talk</a></li>
      </ul>
    </div>
  </header>
</template>
