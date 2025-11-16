import { writable } from 'svelte/store';
import type { User } from 'src/types';

function createUserStore() {
	const { subscribe, set } = writable<User | null>(null);

	return {
		subscribe,
		set,
		login: (user: User) => {
			set(user);
		},
		logout: () => {
			set(null);
		}
	};
}

export const user = createUserStore();