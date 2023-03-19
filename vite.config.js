import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    root: 'src',
    publicDir: 'public',
    build: {
        outDir: '../dist'
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
});
