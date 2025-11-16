import type { DashboardStats, Repository, LanguageUsage, User } from '@/types';

export const mockDashboardStats: DashboardStats = {
	totalRepositories: 24,
	commitStreak: 15,
	totalStars: 342,
	totalCommits: 1247,
};

export const mockLanguageUsage: LanguageUsage[] = [
	{ language: 'TypeScript', percentage: 35, color: '#3178c6' },
	{ language: 'JavaScript', percentage: 28, color: '#f7df1e' },
	{ language: 'Python', percentage: 20, color: '#3776ab' },
	{ language: 'Go', percentage: 12, color: '#00add8' },
	{ language: 'Rust', percentage: 5, color: '#dea584' },
];

export const mockRepositories: Repository[] = [
	{
		id: 1,
		name: 'awesome-project',
		description: 'A full-stack web application built with modern technologies',
		stars: 128,
		commits: 245,
		language: 'TypeScript',
		url: 'https://github.com/user/awesome-project',
	},
	{
		id: 2,
		name: 'ml-toolkit',
		description: 'Machine learning utilities and helpers',
		stars: 89,
		commits: 156,
		language: 'Python',
		url: 'https://github.com/user/ml-toolkit',
	},
	{
		id: 3,
		name: 'api-gateway',
		description: 'High-performance API gateway service',
		stars: 67,
		commits: 198,
		language: 'Go',
		url: 'https://github.com/user/api-gateway',
	},
	{
		id: 4,
		name: 'component-library',
		description: 'Reusable React components library',
		stars: 45,
		commits: 132,
		language: 'JavaScript',
		url: 'https://github.com/user/component-library',
	},
	{
		id: 5,
		name: 'rust-cli',
		description: 'Command-line tool built with Rust',
		stars: 13,
		commits: 78,
		language: 'Rust',
		url: 'https://github.com/user/rust-cli',
	},
];

export const mockUser: User = {
	id: 1,
	name: 'Alex Developer',
	username: 'alexdev',
	email: 'alex@devpulse.dev',
	avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
	githubConnected: true,
};