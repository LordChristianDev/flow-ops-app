
import { LayoutDashboard, User, Settings } from '@lucide/svelte';
import type { NavProp } from "@/types";

export const navItems: NavProp[] = [
	{
		path: '/',
		label: 'Dashboard',
		icon: LayoutDashboard,
	},
	{
		path: '/profile',
		label: 'Profile',
		icon: User,
	},
	{
		path: '/settings',
		label: 'Settings',
		icon: Settings,
	},
];