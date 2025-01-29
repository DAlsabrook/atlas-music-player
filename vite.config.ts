import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss()
  ],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setup_test.ts',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

});
