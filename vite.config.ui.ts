import { defineConfig } from 'vite';
import path from 'path';

import { viteSingleFile } from 'vite-plugin-singlefile';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), svgr(), viteSingleFile()],
  root: path.resolve(__dirname, './src/ui/'),
  build: {
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      input: {
        ui: path.relative(__dirname, './src/ui/index.html'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },

  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@ui': path.resolve(__dirname, './src/ui'),
    },
  },
});
