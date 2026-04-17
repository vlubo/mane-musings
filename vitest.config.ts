import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    env: {
      NEXT_PUBLIC_SANITY_PROJECT_ID: 'test-project-id',
      NEXT_PUBLIC_SANITY_DATASET: 'production',
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
