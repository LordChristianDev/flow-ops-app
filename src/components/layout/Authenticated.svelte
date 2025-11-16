<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { push, location } from 'svelte-spa-router';

  import Header from '@/components/layout/Header.svelte';
  import Sidebar from '@/components/layout/Sidebar.svelte';
  import Footer from '@/components/layout/Footer.svelte';
  
  let { children } = $props();

  let sidebarOpen = $state(false);
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

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

  function closeSidebar() {
    sidebarOpen = false;
  }
</script>

{#if isLoading}
  <div class="min-h-screen flex items-center justify-center">
    <p>Loading...</p>
  </div>
{:else if isAuthenticated}
  <div class="min-h-screen flex flex-col">
    <Header {toggleSidebar} />
    
    <div class="flex flex-1">
      <Sidebar isOpen={sidebarOpen} {closeSidebar} />
      
      <main class="flex-1 flex flex-col">
        <div class="flex-1 p-6" in:fade={{ duration: 200 }}>
          {#key $location}
            {@render children()}
          {/key}
        </div>
        <Footer />
      </main>
    </div>
  </div>
{/if}