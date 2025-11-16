<script lang="ts">
	import { scale } from 'svelte/transition';

	let { title, value, icon, color = 'primary' }: { title: string; value: string | number; icon: string; color?: string } = $props();
</script>

<div class="card" in:scale={{ duration: 300, delay: 100 }}>
	<div class="flex items-center justify-between">
		<div>
			<p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
			<p class="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
		</div>
		<div class="w-12 h-12 bg-{color}-100 dark:bg-{color}-900/30 rounded-lg flex items-center justify-center">
			<svg class="w-6 h-6 text-{color}-600 dark:text-{color}-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
			</svg>
		</div>
	</div>
</div>
