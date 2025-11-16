<script lang="ts">
	import { fade } from 'svelte/transition';

	import StatsCard from '@/components/dashboard/cards/StatsCard.svelte';
	import LanguageChart from '@/components/dashboard/charts/LanguageChart.svelte';
	import StarsChart from '@/components/dashboard/charts/StarsChart.svelte';

	import type { DashboardStats, LanguageUsage, Repository } from '@/types';
    import { mockDashboardStats, mockLanguageUsage, mockRepositories } from '@/services/mock/data';

	let stats: DashboardStats | null = $state(mockDashboardStats);
	let languages: LanguageUsage[] = $state(mockLanguageUsage);
	let repositories: Repository[] = $state(mockRepositories);
	let loading = $state(false);
	let error = $state('');
</script>

<svelte:head>
	<title>Dashboard - DevPulse</title>
</svelte:head>

<div class="max-w-7xl mx-auto">
	<div class="mb-8" in:fade={{ duration: 300 }}>
		<h1 class="text-3xl font-bold mb-2">Dashboard</h1>
		<p class="text-gray-600 dark:text-gray-400">Welcome back! Here's your development overview.</p>
	</div>

	{#if loading}
		<div class="flex items-center justify-center h-64">
			<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
		</div>
	{:else if error}
		<div class="card bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
			<p class="text-red-700 dark:text-red-400">{error}</p>
		</div>
	{:else if stats}
		<div class="space-y-6">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<StatsCard 
					title="Total Repositories" 
					value={stats.totalRepositories}
					icon="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
					color="primary"
				/>
				<StatsCard 
					title="Commit Streak" 
					value={`${stats.commitStreak} days`}
					icon="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
					color="orange"
				/>
				<StatsCard 
					title="Total Stars" 
					value={stats.totalStars}
					icon="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
					color="yellow"
				/>
				<StatsCard 
					title="Total Commits" 
					value={stats.totalCommits}
					icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					color="green"
				/>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<LanguageChart data={languages} />
				<StarsChart data={repositories} />
			</div>

			<div class="card">
				<h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
				<div class="space-y-3">
					<div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
						<div class="w-2 h-2 bg-green-500 rounded-full"></div>
						<div class="flex-1">
							<p class="text-sm font-medium">Pushed to awesome-project</p>
							<p class="text-xs text-gray-600 dark:text-gray-400">2 hours ago</p>
						</div>
					</div>
					<div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
						<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
						<div class="flex-1">
							<p class="text-sm font-medium">Created new branch in ml-toolkit</p>
							<p class="text-xs text-gray-600 dark:text-gray-400">5 hours ago</p>
						</div>
					</div>
					<div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
						<div class="w-2 h-2 bg-purple-500 rounded-full"></div>
						<div class="flex-1">
							<p class="text-sm font-medium">Opened pull request in api-gateway</p>
							<p class="text-xs text-gray-600 dark:text-gray-400">1 day ago</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>