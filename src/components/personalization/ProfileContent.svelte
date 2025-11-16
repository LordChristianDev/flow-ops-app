<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import { user } from '@/stores/user';
    import type { Repository } from '@/types';
    import { mockRepositories } from '@/services/mock/data';

    // --- State (no $state in Svelte) ---
    let repositories: Repository[] = [];
    let loading = true;
    let editMode = false;

    let editedName = '';
    let editedEmail = '';
        
    // --- Watch user store ---
    $: if ($user) {
        editedName = $user.name;
        editedEmail = $user.email;
    }

    // --- Fetch on mount ---
    onMount(async () => {
        try {
            repositories = mockRepositories;
        } catch (err) {
            console.error(err);
        } finally {
            loading = false;
        }
    });

    function toggleEdit() {
        editMode = !editMode;
        if ($user && !editMode) {
            editedName = $user.name;
            editedEmail = $user.email;
        }
    }

    function saveProfile() {
        if ($user) {
            user.set({
                ...$user,
                name: editedName,
                email: editedEmail
            });
        }
        editMode = false;
    }
</script>

<!-- No <svelte:head> in regular Svelte -->
<!-- Put this in index.html instead -->
<!-- <title>Profile - DevPulse</title> -->

<div class="max-w-4xl mx-auto" in:fade={{ duration: 300 }}>
    <h1 class="text-3xl font-bold mb-6">Profile</h1>

    {#if $user}
        <div class="grid gap-6">
            <div class="card">
                <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <img
                            src={$user.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                            alt={$user.name}
                            class="w-20 h-20 rounded-full"
                        />
                        <div>
                            <h2 class="text-2xl font-bold">{$user.name}</h2>
                            <p class="text-gray-600 dark:text-gray-400">@{$user.username}</p>
                        </div>
                    </div>

                    <button on:click={toggleEdit} class="btn-secondary">
                        {editMode ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                {#if editMode}
                    <div class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium mb-2">Name</label>
                            <input
                                id="name"
                                type="text"
                                bind:value={editedName}
                                class="input"
                            />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                bind:value={editedEmail}
                                class="input"
                            />
                        </div>

                        <button on:click={saveProfile} class="btn-primary">
                            Save Changes
                        </button>
                    </div>

                {:else}
                    <div class="space-y-3">
                        <div>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
                            <p class="font-medium">{$user.email}</p>
                        </div>

                        <div>
                            <p class="text-sm text-gray-600 dark:text-gray-400">GitHub Connection</p>
                            <div class="flex items-center gap-2">
                                {#if $user.githubConnected}
                                    <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                                        Connected
                                    </span>
                                {:else}
                                    <button class="btn-primary">
                                        Connect GitHub
                                    </button>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/if}
            </div>

            <div class="card">
                <h3 class="text-xl font-semibold mb-4">Top Repositories</h3>

                {#if loading}
                    <div class="flex justify-center py-8">
                        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                    </div>

                {:else}
                    <div class="space-y-3">
                        {#each repositories as repo}
                            <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <div class="flex items-start justify-between">

                                    <div class="flex-1">
                                        <h4 class="font-semibold text-lg mb-1">{repo.name}</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{repo.description}</p>

                                        <div class="flex items-center gap-4 text-sm">

                                            <div class="flex items-center gap-1">
                                                <div class="w-3 h-3 rounded-full"
                                                    style="background-color: {
                                                        repo.language === 'TypeScript' ? '#3178c6' :
                                                        repo.language === 'JavaScript' ? '#f7df1e' :
                                                        repo.language === 'Python' ? '#3776ab' :
                                                        repo.language === 'Go' ? '#00add8' :
                                                        '#dea584'
                                                    }"
                                                ></div>
                                                <span>{repo.language}</span>
                                            </div>

                                            <div class="flex items-center gap-1">
                                                <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0..." />
                                                </svg>
                                                <span>{repo.stars}</span>
                                            </div>

                                            <div class="flex items-center gap-1">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2..." />
                                                </svg>
                                                <span>{repo.commits} commits</span>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href={repo.url}
                                        target="_blank"
                                        aria-label="Open repository on GitHub"
                                        rel="noopener noreferrer"
                                        class="ml-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                    >
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6..." />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        {/each}
                    </div>

                {/if}
            </div>
        </div>

    {:else}
        <div class="card text-center py-12">
            <p class="text-gray-600 dark:text-gray-400 mb-4">Please log in to view your profile</p>
            <a href="/login" class="btn-primary inline-block">Log In</a>
        </div>
    {/if}
</div>
