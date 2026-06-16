import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://herrmannw.github.io",
  base: "/RiotScale",
  integrations: [react()],
});
