<script lang="ts">
    import { push } from 'svelte-spa-router';

    export let isOpen = false;
    export let closeSidebar: () => void;

    const navItems = [
        {
            path: '/',
            label: 'Dashboard',
            icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
            path: '/profile',
            label: 'Profile',
            icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
        },
        {
            path: '/settings',
            label: 'Settings',
            icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35...'
        }
    ];

    // Regular Svelte: get path from the browser
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
    class="fixed inset-0 bg-gray-900/50 z-30 lg:hidden transition-opacity {isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}"
    on:click={closeSidebar}
    on:keydown={(e) => e.key === 'Escape' && closeSidebar()}
    aria-label="Close sidebar"
    tabindex={isOpen ? 0 : -1}
></button>

<!-- Sidebar -->
<aside
    class="fixed lg:sticky top-0 left-0 h-screen bg-white dark:bg-gray-800 shadow-lg z-40 transition-transform duration-300 {isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} w-64"
>
    <div class="h-full flex flex-col">

        <!-- Mobile brand -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 lg:hidden">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-linear-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-lg">D</span>
                </div>
                <h2 class="text-xl font-bold">DevPulse</h2>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 p-4 space-y-2">
            {#each navItems as item}
                <a
                    href={item.path}
                    on:click={handleLinkClick}
                    class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors {currentPath === item.path
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon}></path>
                    </svg>
                    <span>{item.label}</span>
                </a>
            {/each}
        </nav>

        <!-- Footer link -->
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <a
                href="/login"
                on:click={handleLinkClick}
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span>Login</span>
            </a>
        </div>
    </div>
</aside>
