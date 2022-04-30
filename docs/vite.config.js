import path from 'path' 
import { defineConfig, searchForWorkspaceRoot } from 'vite'

const vpRoot = path.resolve(__dirname, '..')

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: true,
      allow: [vpRoot]
    }
  }
})