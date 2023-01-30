import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";
import fs from "fs";

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relative: string) => path.resolve(appDirectory, relative)
const root = path.resolve(__dirname, resolveApp('src'))

export default defineConfig({
  resolve: {
    alias: {
      '@': `${root}/`,
      // '@config': `${root}/config.ts`,
      '@static': `${root}/../static`,
    },
  },
  plugins: [vue()],
})
