// filepath: /com.docker.devenvironments.code/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
