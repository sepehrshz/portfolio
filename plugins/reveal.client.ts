export default defineNuxtPlugin((nuxtApp) => {
  ;(window as any).__ready = true

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); io.unobserve(e.target) }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, b) {
      el.setAttribute('data-reveal', '')
      if (b.value) el.style.setProperty('--d', `${b.value}ms`)
      io.observe(el)
    },
    getSSRProps: () => ({})
  })
})
