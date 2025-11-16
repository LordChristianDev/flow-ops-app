<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Page Not Found - DevPulse</title>
</svelte:head>

<div class="min-h-[calc(100vh-300px)] flex items-center justify-center p-4" in:fade={{ duration: 300 }}>
	<div class="text-center">
		<div class="mb-8">
			<h1 class="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
			<h2 class="text-3xl font-bold mb-2">Page Not Found</h2>
			<p class="text-gray-600 dark:text-gray-400 mb-8">
				Sorry, we couldn't find the page you're looking for.
			</p>
		</div>

		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/" class="btn-primary inline-block">
				Go to Dashboard
			</a>
			<button onclick={() => history.back()} class="btn-secondary">
				Go Back
			</button>
		</div>
	</div>
</div>
