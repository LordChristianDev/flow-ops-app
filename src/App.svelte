<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { location } from 'svelte-spa-router';

	import routes from '@/lib/router';

	import './app.css';
	import Router from 'svelte-spa-router';
	import AuthenticatedLayout from '@/lib/components/layout/Authenticated.svelte';

	const queryClient = new QueryClient();

	// Check if current route needs auth
	$: needsAuth = $location !== '/login' && $location !== '*';
</script>

<QueryClientProvider client={queryClient}>
	{#if needsAuth}
		<AuthenticatedLayout>
			<Router {routes} />
		</AuthenticatedLayout>
	{:else}
		<Router {routes} />
	{/if}
</QueryClientProvider>
