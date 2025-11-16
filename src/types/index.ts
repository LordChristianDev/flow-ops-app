export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	avatar?: string;
	githubConnected?: boolean;
}

export type Repository = {
	id: number;
	name: string;
	description: string;
	stars: number;
	commits: number;
	language: string;
	url: string;
}

export type DashboardStats = {
	totalRepositories: number;
	commitStreak: number;
	totalStars: number;
	totalCommits: number;
}

export type LanguageUsage = {
	language: string;
	percentage: number;
	color: string;
}

export type ApiResponse<T> = {
	data: T;
	success: boolean;
	message?: string;
}

export type ApiError = {
	message: string;
	status: number;
}
