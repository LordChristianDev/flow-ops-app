<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { push, location } from 'svelte-spa-router';

	import AppSidebar from './AppSidebar.svelte';
	import AppBar from './AppBar.svelte';
  
  let { children } = $props();

  let isAuthenticated = $state(false);
  let isLoading = $state(true);

  onMount(() => {
    const userData = !!localStorage.getItem('user');
    
    if (!userData) {
      push('/login');
      return;
    }

    isAuthenticated = true;
    isLoading = false;
  });


</script>

{#if isLoading}
  <div class="min-h-screen flex items-center justify-center">
    <p>Loading...</p>
  </div>
{:else if isAuthenticated}
  <div class="min-h-screen flex flex-col">
    <AppBar />
    
    <div class="flex flex-1 max-h-[calc(100vh-56px)]">
      <AppSidebar/>
      
      <main class="flex-1 flex flex-col max-h-screen">
        <div class="flex-1 p-6" in:fade={{ duration: 200 }}>
          {#key $location}
            {@render children()}
          {/key}
        </div>
      </main>
    </div>
  </div>
{/if}