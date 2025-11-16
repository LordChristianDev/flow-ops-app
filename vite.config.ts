import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	return {
		plugins: [tailwindcss(), svelte()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				$lib: path.resolve("./src/lib"),
			},
		},
		build: { outDir: 'dist', emptyOutDir: true },
	};
});
