import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/v1/socialMedia': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1\/socialMedia/, '/api/v1/socialMedia'),
      },
    },
  },
});

