import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
// vite.config.js

// Import Node globals polyfills
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    hmr: true, // Simplified HMR config for local development
    watch: {
      usePolling: false,
    },
  },
  resolve: {
    alias: {
      // Provide polyfills for Node.js globals
      stream: 'stream-browserify',
      buffer: 'buffer',
      process: 'process/browser',
      global: 'global',  // Add this line

    },
  },
  build: {
    rollupOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true, // Use buffer polyfill
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
});
