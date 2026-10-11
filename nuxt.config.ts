import { site } from "./data/site";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: { cssPath: "~/assets/css/main.css" },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: `${site.name} — ${site.role}`,
      meta: [
        { name: "description", content: site.description },
        { name: "theme-color", content: "#0c0c0b" },
        { property: "og:title", content: `${site.name} — ${site.role}` },
        { property: "og:description", content: site.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      script: [
        {
          tagPosition: "head",
          innerHTML:
            "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ok');setTimeout(function(){if(!window.__ready)document.documentElement.classList.remove('motion-ok')},4000)}",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%230c0c0b'/><circle cx='16' cy='16' r='6' fill='%233045e1'/></svg>",
        },
      ],
    },
  },
});
