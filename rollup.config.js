import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'
import { glob } from 'glob'

const configs = []

const files = await glob('src/*.test.js')

for (const file of files) {
  configs.push({
    input: file,
    output: {
      file: './dist/' + path.basename(file, path.extname(file)) + '.bundle.js',
      format: 'commonjs',
      exports: 'named',
    },
    plugins: [esbuild(), commonjs()],
    external: [
      'k6',
      'k6/options',
      'k6/http',
      'https://jslib.k6.io/k6-utils/1.1.0/index.js',
      '@playwright/test',
    ],
  })
}

export default configs
