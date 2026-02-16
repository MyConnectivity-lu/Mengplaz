import { basename, dirname, join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import greycat from '@greycat/web/vite-plugin';

const root = resolve(__dirname, 'frontend');

export default defineConfig((_) => ({
  plugins: [greycat()],
  base: './', // makes generated urls relative to each file
  appType: 'spa',
  root: resolve(__dirname, 'frontend'),
  resolve: {
    alias: {
      // matches the `paths` definitions in `tsconfig.json`
      '~': resolve(__dirname),
    },
  },
  publicDir: resolve(__dirname, 'frontend', 'public'),
  build: {
    outDir: resolve(__dirname, 'webroot'),
    target: 'esnext',
    rollupOptions: {
      input: resolve(__dirname, 'frontend', 'index.html'),
      output: {
        entryFileNames: (chunk) => {
          let dir = dirname(chunk.facadeModuleId!.slice(root.length + 1));
          let name;
          if (dir === '.') {
            dir = '.';
            name = 'index';
          } else {
            name = basename(dir);
          }
          return join(dir, `${name}.js`);
        },
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: {
          greycat: ['@greycat/web'],
        },
      },
    },
  },
}));
