import type { NuxtPage } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      title: "Yuma Ichimura | petaxa.com",
      htmlAttrs: {
        lang: "ja",
      },
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "shortcut icon", href: "/favicon.ico" },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content: "The Personal Web of Yuma Ichimura | petaxa",
        },
        { name: "theme-color", content: "#5c5169" },
        { property: "og:title", content: "Yuma Ichimura | petaxa.com" },
        {
          property: "og:description",
          content: "The Personal Web of Yuma Ichimura | petaxa",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.petaxa.com/" },
        {
          property: "og:image",
          content: "https://www.petaxa.com/ogp.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@damenamepu" },
        { name: "twitter:title", content: "Yuma Ichimura | petaxa.com" },
        {
          name: "twitter:description",
          content: "e Personal Web of Yuma Ichimura | petaxa",
        },
        {
          name: "twitter:image",
          content: "https://www.petaxa.com/ogp.png",
        },
        { name: "twitter:image:width", content: "1200" },
        { name: "twitter:image:height", content: "630" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@tresjs/nuxt",
    "@vueuse/nuxt",
  ],
  imports: { autoImport: false },
  hooks: {
    // 「_」からはじまるパスをルーティングから除外
    "pages:extend": (pages) => {
      const pagesToRemove: NuxtPage[] = [];
      pages.forEach((page) => {
        if (/\/_[^/]+/.test(page.path)) {
          pagesToRemove.push(page);
        }
      });
      pagesToRemove.forEach((page) => {
        pages.splice(pages.indexOf(page), 1);
      });
    },
  },
});
