<script lang="ts">
	import { theme } from '@/stores/theme';
	import { fade } from 'svelte/transition';

	let notifications = $state({
		email: true,
		push: false,
		weekly: true,
	});

	function saveSettings() {
		alert('Settings saved successfully!');
	}
</script>

<svelte:head>
	<title>Settings - DevPulse</title>
</svelte:head>

<div class="max-w-3xl mx-auto" in:fade={{ duration: 300 }}>
	<h1 class="text-3xl font-bold mb-6">Settings</h1>

	<div class="space-y-6">
		<div class="card">
			<h2 class="text-xl font-semibold mb-4">Appearance</h2>
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<p class="font-medium">Theme</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">Choose your preferred theme</p>
					</div>
					<div class="flex gap-2">
						<button
							onclick={() => theme.set('light')}
							class="px-4 py-2 rounded-lg border-2 transition-colors {$theme === 'light' 
								? 'border-primary-600 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' 
								: 'border-gray-300 dark:border-gray-600 hover:border-gray-400'}"
						>
							Light
						</button>
						<button
							onclick={() => theme.set('dark')}
							class="px-4 py-2 rounded-lg border-2 transition-colors {$theme === 'dark' 
								? 'border-primary-600 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' 
								: 'border-gray-300 dark:border-gray-600 hover:border-gray-400'}"
						>
							Dark
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="card">
			<h2 class="text-xl font-semibold mb-4">Notifications</h2>
			<div class="space-y-4">
				<label class="flex items-center justify-between cursor-pointer">
					<div>
						<p class="font-medium">Email Notifications</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">Receive email updates about your activity</p>
					</div>
					<input
						type="checkbox"
						bind:checked={notifications.email}
						class="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500"
					/>
				</label>

				<label class="flex items-center justify-between cursor-pointer">
					<div>
						<p class="font-medium">Push Notifications</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">Get push notifications on your devices</p>
					</div>
					<input
						type="checkbox"
						bind:checked={notifications.push}
						class="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500"
					/>
				</label>

				<label class="flex items-center justify-between cursor-pointer">
					<div>
						<p class="font-medium">Weekly Summary</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">Receive a weekly summary of your progress</p>
					</div>
					<input
						type="checkbox"
						bind:checked={notifications.weekly}
						class="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500"
					/>
				</label>
			</div>
		</div>

		<div class="card">
			<h2 class="text-xl font-semibold mb-4">Account Preferences</h2>
			<div class="space-y-4">
				<div>
					<label 
						for="defaultVisibility" 
						class="block text-sm font-medium mb-2"
					>
						Default Repository Visibility
					</label>
					<select id="defaultVisibility" class="input">
						<option>Public</option>
						<option>Private</option>
					</select>
				</div>

				<div>
					<label 
						for="language"
						class="block text-sm font-medium mb-2"
					>
						Language
					</label>

					<select id="language" class="input">
						<option>English</option>
						<option>Spanish</option>
						<option>French</option>
						<option>German</option>
					</select>
				</div>

				<div>
					<label 
						for="timezone"
						class="block text-sm font-medium mb-2"
					>
						Timezone
					</label>

					<select id="timezone" class="input">
						<option>UTC</option>
						<option>EST</option>
						<option>PST</option>
						<option>GMT</option>
					</select>
				</div>
			</div>
		</div>

		<div class="flex justify-end gap-3">
			<button class="btn-secondary">Cancel</button>
			<button onclick={saveSettings} class="btn-primary">Save Settings</button>
		</div>
	</div>
</div>
