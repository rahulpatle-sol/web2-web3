import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills' // Ye install karna padega

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      // Solana aur Buffer ke liye polyfills enable kar rahe hain
      globals: {
        Buffer: true, 
        global: true,
        process: true,
      },
    }),
  ],
  define: {
    // Ye Theatre.js aur Solana ki compatibility ke liye hai
    'process.env': {},
  },
  resolve: {
    alias: {
      // Three.js examples ke liye
      'three/examples/jsm': 'three/examples/jsm',
    },
  },
  optimizeDeps: {
    // Vite ko bol rahe hain ki in modules ko pehle hi prepare karle
    include: ['buffer', '@solana/web3.js', '@theatre/core', '@theatre/studio'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    target: 'esnext',
  }
})