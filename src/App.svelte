<script lang="ts">
  import Router from 'svelte-spa-router';
  import AuthenticatedLayout from '@/components/layout/Authenticated.svelte';
  import routes from '@/router';
  import { location } from 'svelte-spa-router';
  
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