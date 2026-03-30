import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Visszalépünk az időben: az ES2019 szabványt a react-snap régi böngészője is megérti,
    // így nem fog elhasalni az "Unexpected token '?'" hibával.
    target: 'es2019',
  }
})