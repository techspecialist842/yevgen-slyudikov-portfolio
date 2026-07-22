import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages needs the repo subpath; Vercel / local preview use root.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/yevgen-slyudikov-portfolio/' : '/',
})
