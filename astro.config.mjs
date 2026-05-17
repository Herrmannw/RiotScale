import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://herrmannw.github.io",
  base: process.env.PUBLIC_BASE_PATH || "/RiotScale",
});
