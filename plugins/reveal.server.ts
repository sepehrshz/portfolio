export default defineNuxtPlugin((nuxtApp) => {
  // Render the reveal attributes into the HTML so nothing flashes before hydration
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: (b) => ({ 'data-reveal': '', ...(b.value ? { style: `--d:${b.value}ms` } : {}) })
  })
})
