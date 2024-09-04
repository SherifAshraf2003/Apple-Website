import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "none-2m6",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "none-2m6",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "none-2m6",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})