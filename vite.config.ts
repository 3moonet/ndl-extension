import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  name: "NDL Extension",
  description: "NDL Extension",
  version: "1.0.0",
  manifest_version: 3,
  content_scripts: [
    {
      matches: ["https://ndlsearch.ndl.go.jp/books/*"],
      js: ["src/content/index.tsx"],
    },
  ],
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
