import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // ✅ make Vite use your app tsconfig instead of root
  esbuild: {
    tsconfigRaw: require('./tsconfig.app.json'),
  },
});