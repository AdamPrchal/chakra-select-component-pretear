import swc from 'unplugin-swc';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import pkg from './package.json';
import path from 'path';


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'index.mjs' : 'index.js'),
    },
    emptyOutDir: false,
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    swc.vite(),
    swc.rollup({
      minify: true,
    }),
    dts({ insertTypesEntry: true }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1DA57A',
        },
      },
    },
  },
});
