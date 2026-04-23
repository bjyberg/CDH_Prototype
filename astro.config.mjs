// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://bjyberg.github.io/CDH_Prototype/",
  base: "/CDH_Prototype",
  vite: {
    build: {
      rollupOptions: {
        external: [/\/pagefind\//],
      },
    },
  },
});
