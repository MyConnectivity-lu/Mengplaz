import { basename, dirname, join, resolve } from 'node:path';
import { defineConfig } from 'vite-plus';
import greycat from '@greycat/web/vite-plugin';

const root = resolve('frontend');

export default defineConfig({
  plugins: [greycat()],
  base: './', // makes generated urls relative to each file
  appType: 'spa',
  root: root,
  resolve: {
    alias: {
      // matches the `paths` definitions in `tsconfig.json`
      '~': root,
    },
  },
  publicDir: resolve('frontend', 'public'),
  fmt: {
    // carried over from the former .prettierrc — oxfmt is prettier-compatible
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    printWidth: 150,
    // build output, generated types, static assets and prose are not ours to format
    ignorePatterns: ['webroot', 'gcdata', 'project.d.ts', 'frontend/public', '**/*.md'],
  },
  lint: {
    // Only app source is type-aware linted; webroot is build output and the
    // config files use the Node environment (matches the tsconfig include).
    ignorePatterns: ['webroot', 'gcdata', 'vite.config.ts'],
    plugins: ['unicorn', 'typescript', 'oxc'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  build: {
    outDir: resolve('webroot'),
    target: 'esnext',
    rollupOptions: {
      input: resolve('frontend', 'index.html'),
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
        // rolldown's replacement for rollup's object-form `manualChunks`.
        // `includeDependenciesRecursively` keeps the SDK's own deps (shoelace,
        // echarts, d3) in the greycat chunk, the way `manualChunks` did.
        codeSplitting: {
          includeDependenciesRecursively: true,
          groups: [{ name: 'greycat', test: /[\\/]@greycat[\\/]web[\\/]/ }],
        },
      },
    },
  },
});
