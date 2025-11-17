<script lang="ts">
	import { location } from 'svelte-spa-router';

	import routes from '@/lib/router';

	import './app.css';
	import Router from 'svelte-spa-router';
	import AuthenticatedLayout from '@/lib/components/layout/Authenticated.svelte';

	// Check if current route needs auth
	$: needsAuth = $location !== '/login' && $location !== '*';
</script>

{#if needsAuth}
	<AuthenticatedLayout>
		<Router {routes} />
	</AuthenticatedLayout>
{:else}
	<Router {routes} />
{/if}
