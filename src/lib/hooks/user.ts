import { writable } from 'svelte/store';
import type { UserProp } from '@/lib/types';

function createUserStore() {
	const { subscribe, set } = writable<UserProp | null>(null);

	return {
		subscribe,
		set,
		login: (user: UserProp) => {
			set(user);
		},
		logout: () => {
			set(null);
		}
	};
}

export const user = createUserStore();