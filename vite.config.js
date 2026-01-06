// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Crucial: Makes server accessible to Render's network
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',  // Also needed for preview mode
    port: 5173,
    strictPort: true,
  }
})