import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/* Статическая сборка для хостинга (Netlify и т.п.) — без Laravel */
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
