<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createQuery } from '@tanstack/svelte-query';

	import DashboardContent from '@/lib/components/dashboard/DashboardContent.svelte';
	import DashboardLoading from '@/lib/components/dashboard/DashboardLoading.svelte';
	import DashboardError from '@/lib/components/dashboard/DashboardError.svelte';

	import { QUERIES as DASHBOARD_QUERIES} from "@/lib/stores/services/dashboard-client";
	
	const STATS = createQuery(() => ({
		queryKey: ['dashboard-stats'],
		queryFn: () => DASHBOARD_QUERIES.fetchMockDashboardStats(),
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		enabled: true,
	}))

	const LANGUAGES = createQuery(() => ({
		queryKey: ['languages-usage'],
		queryFn: () => DASHBOARD_QUERIES.fetchMockLanguageUsage(),
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		enabled: true,
	}))

	const REPOSITORIES = createQuery(() => ({
		queryKey: ['repositories'],
		queryFn: () => DASHBOARD_QUERIES.fetchMockRepositories(),
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		enabled: true,
	}))
</script>

<svelte:head>
	<title>Dashboard - FlowOps</title>
</svelte:head>

<div class="mx-auto overflow-y-auto max-h-[calc(100vh-56px)]">
	<div class="mb-8" in:fade={{ duration: 300 }}>
		<h1 class="text-3xl font-bold mb-2">Dashboard</h1>
		<p class="text-gray-600 dark:text-gray-400">Welcome back! Here's your development overview.</p>
	</div>

	{#if STATS.isPending || LANGUAGES.isPending || REPOSITORIES.isPending}
		<DashboardLoading />
	{/if}
		
	{#if STATS.error}
		<DashboardError error={STATS.error.message} />	
	{/if}

	{#if LANGUAGES.error}	
		<DashboardError error={LANGUAGES.error.message} />	
	{/if}

	{#if REPOSITORIES.error}
		<DashboardError error={REPOSITORIES.error.message} />	
	{/if}

	{#if STATS.isSuccess && LANGUAGES.isSuccess && REPOSITORIES.isSuccess}
		<DashboardContent
			stats={STATS.data}
			languages={LANGUAGES.data}
			repositories={REPOSITORIES.data}
		/>
	{/if}
</div>
