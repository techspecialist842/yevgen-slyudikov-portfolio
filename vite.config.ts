import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://<user>.github.io/yevgen-slyudikov-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/yevgen-slyudikov-portfolio/',
})
