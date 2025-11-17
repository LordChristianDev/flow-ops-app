<script lang="ts">
    import { push } from 'svelte-spa-router';
    import { navItems } from '@/lib/stores/data/layout-data';
	import { cn } from '@/lib/utils';

    export let isOpen = false;
    export let closeSidebar: () => void;

    let currentPath = '/';

    $: if (typeof window !== 'undefined') {
        currentPath = window.location.pathname;
        push(currentPath);
    }

    function handleLinkClick() {
        if (window.innerWidth < 1024) {
            closeSidebar();
        }
    }
</script>

<!-- Background overlay -->
<button
    class={cn(
        "fixed inset-0 bg-gray-900/50 z-30 lg:hidden transition-opacity", 
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    )}
    on:click={closeSidebar}
    on:keydown={(e) => e.key === 'Escape' && closeSidebar()}
    aria-label="Close sidebar"
    tabindex={isOpen ? 0 : -1}
></button>

<!-- Sidebar -->
<aside
    class={ cn(
        "fixed lg:sticky top-0 left-0 max-h-[calc(100vh-56px)] bg-white dark:bg-gray-800 shadow-lg z-40 transition-transform duration-300 w-56",
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    )}
>
    <div class="h-full flex flex-col">
        <!-- Mobile brand -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 lg:hidden">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-linear-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
					<img src="flowops_logo.png" alt="FlowOps Logo" class="w-6 h-6">
				</div>
                <h2 class="text-xl font-bold">FlowOps</h2>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
            {#each navItems as item}
                <a
                    href={item.path}
                    on:click={handleLinkClick}
                    class={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors", 
                        currentPath === item.path
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    )}
                >   
                    <item.icon />
                    <span>{item.label}</span>
                </a>
            {/each}
        </nav>

        <!-- Footer link -->
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <a
                href="/login"
                on:click={handleLinkClick}
                class={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors", 
                    currentPath === '/login'
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                )}
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span>Login</span>
            </a>
        </div>
    </div>
</aside>
