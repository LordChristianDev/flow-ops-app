<script lang="ts">
  import { push } from 'svelte-spa-router';
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { navItems } from '@/lib/stores/data/layout-data';

  let currentPath = '/';

  $: if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
      push(currentPath);
  }
</script>
 
<Sidebar.Provider>
  <Sidebar.Root collapsible="icon">
    <Sidebar.Content>
      <Sidebar.GroupLabel>Navigations</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each navItems as item (item.label)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href={item.path} {...props}>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Content>
  </Sidebar.Root>
</Sidebar.Provider>