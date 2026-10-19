import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        host: true,
        proxy: {
			'/api': {
				target: process.env.API_PROXY_TARGET || 'http://localhost:5000',
				changeOrigin: true,
				secure: false
			}
		}
    },
    build: {
        outDir: 'dist',
        sourcemap: process.env.NODE_ENV !== 'production'
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './src/setupTests.js',
    }
});
