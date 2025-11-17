import { type Icon } from '@lucide/svelte';

export type NavProp = {
	path: string;
	label: string;
	icon: typeof Icon;
};

export type UserProp = {
	id: number;
	name: string;
	username: string;
	email: string;
	avatar?: string;
	githubConnected?: boolean;
};

export type RepositoryProp = {
	id: number;
	name: string;
	description: string;
	stars: number;
	commits: number;
	language: string;
	url: string;
};

export type DashboardStatsProp = {
	totalRepositories: number;
	commitStreak: number;
	totalStars: number;
	totalCommits: number;
};

export type LanguageUsageProp = {
	language: string;
	percentage: number;
	color: string;
};