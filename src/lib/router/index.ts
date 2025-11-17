import Login from '@/lib/pages/authentication/Login.svelte';
import NotFound from '@/lib/pages/authentication/NotFound.svelte';
import Dashboard from '@/lib/pages/dashboard/Dashboard.svelte';
import Profile from '@/lib/pages/personalization/Profile.svelte';
import Settings from '@/lib/pages/personalization/Settings.svelte';

const routes = {
	'/': Dashboard,
	'/login': Login,
	'/profile': Profile,
	'/settings': Settings,

	// Catch-all route
	'*': NotFound
};

export default routes;