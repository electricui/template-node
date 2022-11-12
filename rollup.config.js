const run = require('@rollup/plugin-run')
const typescript = require('@rollup/plugin-typescript')
const { externals } = require('rollup-plugin-node-externals')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const path = require('path')

const euiLoader = require('@electricui/rollup-loader')

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
    interop: "auto" // match typescript es module interop behaviour
  },
  plugins: [
    euiLoader(),

    externals({
      packagePath: path.resolve(__dirname, 'package.json'),
      //  exclude: /electricui/,
    }),

    nodeResolve(),

    commonjs(),

    typescript({}),

    run(),
  ],
}
