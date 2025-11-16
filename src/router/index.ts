import Login from '@/pages/authentication/Login.svelte';
import NotFound from '@/pages/authentication/NotFound.svelte';
import Dashboard from '@/pages/dashboard/Dashboard.svelte';
import Profile from '@/pages/personalization/Profile.svelte';
import Settings from '@/pages/personalization/Settings.svelte';

const routes = {
	'/': Dashboard,
	'/login': Login,
	'/profile': Profile,
	'/settings': Settings,

	// Catch-all route
	'*': NotFound
};

export default routes;