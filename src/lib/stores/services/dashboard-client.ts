import type { DashboardStatsProp, LanguageUsageProp, RepositoryProp } from "@/lib/types";
import { mockDashboardStats, mockLanguageUsage, mockRepositories } from "./mock/data";

export const QUERIES = {
	fetchMockDashboardStats: async (): Promise<DashboardStatsProp> => {
		await new Promise(resolve => setTimeout(resolve, 1000));

		return mockDashboardStats;
	},
	fetchMockLanguageUsage: async (): Promise<LanguageUsageProp[]> => {
		await new Promise(resolve => setTimeout(resolve, 1000));

		return mockLanguageUsage;
	},
	fetchMockRepositories: async (): Promise<RepositoryProp[]> => {
		await new Promise(resolve => setTimeout(resolve, 1000));

		return mockRepositories;
	},
};