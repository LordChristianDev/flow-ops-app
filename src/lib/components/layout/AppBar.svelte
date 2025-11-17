<script lang="ts">
	import { user } from "@/lib/hooks/user";
	import { theme } from "@/lib/hooks/theme";

	function handleThemeToggle() {
		theme.toggle();
	}
</script>

<header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
	<div class="px-4 py-3 flex items-center justify-between">
		<div class="flex items-center gap-4">
			<div class="flex items-center gap-2">
				<div class="hidden w-8 h-8 bg-linear-to-br from-[#0ea5e9] to-[#0369a1] rounded-lg lg:flex items-center justify-center">
					<img src="flowops_logo.png" alt="FlowOps Logo" class="w-6 h-6">
				</div>
				<h1 class="text-xl font-bold bg-linear-to-r from-[#0ea5e9] to-[#0369a1] bg-clip-text text-transparent">
					FlowOps
				</h1>
			</div>
		</div>

		<div class="flex items-center gap-4">
			<button
				onclick={handleThemeToggle}
				class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
				aria-label="Toggle theme"
			>
				{#if $theme === 'dark'}
					<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
					</svg>
				{:else}
					<svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				{/if}
			</button>

			{#if $user}
				<div class="flex items-center gap-2">
					<img
						src={$user.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
						alt={$user.name}
						class="w-8 h-8 rounded-full"
					/>
					<span class="hidden md:block text-sm font-medium">{$user.name}</span>
				</div>
			{/if}
		</div>
	</div>
</header>
