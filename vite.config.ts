import { basename, dirname, relative, resolve } from 'node:path';
import { globSync } from 'node:fs';
import { defineConfig } from 'vite-plus';
import greycat from '@greycat/web/vite-plugin';

const APP = resolve('app');
const PAGES_ROOT = resolve('app/pages');

// One entry per MPA page: every app/pages/**/index.html is a page.
const pages = globSync('**/index.html', { cwd: PAGES_ROOT }).map((p) => resolve(PAGES_ROOT, p));

export default defineConfig({
  plugins: [greycat()],
  base: './', // makes generated urls relative to each file
  appType: 'mpa',
  root: PAGES_ROOT,
  resolve: {
    alias: {
      // matches the `paths` definitions in `tsconfig.json`
      '~': APP,
    },
  },
  publicDir: resolve('app/public'),
  fmt: {
    // carried over from the former .prettierrc — oxfmt is prettier-compatible
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    printWidth: 120,
    // build output, generated types, static assets and prose are not ours to format
    ignorePatterns: ['webroot', 'gcdata', 'project.d.ts', 'app/public', '**/*.md', 'scripts'],
  },
  lint: {
    // Only app source is type-aware linted; webroot is build output and the
    // config files use the Node environment (matches the tsconfig include).
    ignorePatterns: ['webroot', 'gcdata', 'vite.config.ts', 'playwright.config.ts', 'scripts'],
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
    // webroot/ also holds the GreyCat explorer, which is not ours to delete.
    emptyOutDir: false,
    target: 'esnext',
    rollupOptions: {
      input: pages,
      output: {
        entryFileNames: (chunk) =>
          chunk.facadeModuleId ? `assets/${pageName(chunk.facadeModuleId)}.js` : 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // rolldown's replacement for rollup's object-form `manualChunks`.
        codeSplitting: {
          includeDependenciesRecursively: true,
          groups: [{ name: 'greycat', test: /[\\/]@greycat[\\/]web[\\/]/ }],
        },
      },
    },
  },
});

// A page's chunk is named after its directory, since every page module is an
// index.ts. The page at the root of PAGES_ROOT keeps the name "index".
function pageName(moduleId: string): string {
  const dir = dirname(moduleId);
  if (dir === PAGES_ROOT) {
    return 'index';
  }
  if (!relative(PAGES_ROOT, dir).startsWith('..')) {
    return basename(dir);
  }
  return basename(moduleId).replace(/\.[^.]+$/, '');
}
