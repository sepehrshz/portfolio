<script setup lang="ts">
import { site } from '~/data/site'
const copied = ref(false)
async function copy() {
  try { await navigator.clipboard.writeText(site.email); copied.value = true; setTimeout(() => (copied.value = false), 2000) }
  catch { window.prompt('Copy my email:', site.email) }
}
</script>

<template>
  <section id="contact" class="border-t border-paper/10 py-24 md:py-36">
    <div class="wrap">
      <p v-reveal class="label mb-8">03 / Contact</p>
      <h2 v-reveal="100" class="max-w-5xl text-[clamp(2.6rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.045em]">
        Have an interesting problem? Let's build <em class="font-serif font-normal italic text-[#273bd2]">something
          meaningful.</em>
      </h2>
      <div v-reveal="200" class="mt-12 flex flex-wrap items-center gap-3">
        <a :href="`mailto:${site.email}`" class="btn-solid">Email me ↗</a>
        <button type="button" class="btn-line" @click="copy" aria-live="polite">{{ copied ? 'Copied ✓' : site.email
        }}</button>
      </div>
      <ul v-reveal="300" class="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <li v-for="s in site.socials" :key="s.label"><a :href="s.href" target="_blank" rel="noopener" class="ulink">{{
          s.label }} ↗</a></li>
      </ul>
    </div>
  </section>
</template>
