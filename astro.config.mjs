import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://riidwanadiitya.github.io",
  base: "/porto",
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
    tailwind(),
  ],
});
