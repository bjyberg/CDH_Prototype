// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://bjyberg.github.io/CDH_Prototype/",
  base: "/CDH_Prototype",
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        external: [/\/pagefind\//],
      },
    },
  },
});
