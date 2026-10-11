<script setup lang="ts">
defineProps<{ kind: 'rag' | 'ml' | 'api' | 'typer' }>()
const bars = [34, 52, 41, 68, 59, 80, 72, 91]
const routes = [['GET', '/api/lessons'], ['POST', '/api/bookings'], ['GET', '/api/instructors'], ['POST', '/api/contact']]
</script>

<template>
  <div
    class="relative flex h-full min-h-[260px] w-full flex-col bg-raised p-5 font-mono text-[11px] text-paper/70 md:p-7"
    style="background-image:linear-gradient(rgba(241,237,228,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(241,237,228,.045) 1px,transparent 1px);background-size:32px 32px">
    <div class="flex items-center justify-between">
      <div class="flex gap-1.5"><i v-for="n in 3" :key="n" class="h-2 w-2 rounded-full bg-paper/20" /></div>
      <span class="text-mute">Illustrative preview</span>
    </div>

    <div class="my-auto py-6">
      <div v-if="kind === 'rag'" class="space-y-3">
        <div class="ml-auto w-3/4 border border-paper/15 bg-ink p-3">What are the renewal terms?</div>
        <div class="w-[88%] border border-[#273bd2]/40 bg-ink p-3 text-paper">
          An answer grounded in the retrieved passages, with sources attached.
          <div class="mt-2 flex flex-wrap gap-2 text-[#273bd2]"><span class="border border-[#273bd2]/40 px-1.5">[1]
              doc-a p.4</span><span class="border border-[#273bd2]/40 px-1.5">[2] doc-b p.1</span></div>
        </div>
        <div class="flex items-center gap-2 border border-paper/15 bg-ink p-3 text-mute"><span
            class="pulse text-[#273bd2]">▍</span>Ask your documents</div>
      </div>

      <div v-else-if="kind === 'ml'" class="flex h-[150px] items-end gap-2 border-b border-l border-paper/20 px-3">
        <div v-for="(h, i) in bars" :key="i" class="flex-1"
          :class="i === bars.length - 1 ? 'bg-[#273bd2]' : 'bg-paper/25'" :style="{ height: h + '%' }" />
      </div>

      <div v-else-if="kind === 'typer'">
        <img src="/typer.jpg" alt="">
      </div>

      <div v-else class="space-y-2">
        <div v-for="r in routes" :key="r[1]" class="flex items-center gap-3 border border-paper/10 bg-ink px-3 py-2.5">
          <span class="w-10 text-[#273bd2]">{{ r[0] }}</span><span>{{ r[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
