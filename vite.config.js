import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'library') {
    // Library build configuration
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'lib/index.js'),
          name: 'BrandsyncDesignSystem',
          fileName: 'index',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'react/jsx-runtime'
            }
          }
        }
      }
    };
  }

  // Development build configuration
  return {
    plugins: [react()],
  };
});
