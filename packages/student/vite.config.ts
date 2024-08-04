import react from "@vitejs/plugin-react";
import { getEnv } from "../../config.ts";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  getEnv(mode);
  return defineConfig({
    plugins: [react(), svgr(), nodePolyfills()],
    cacheDir: "./.vite",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: { port: 3001 },
    define: { "process.env": process.env },
  });
};
