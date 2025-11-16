<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	import { theme } from '@/stores/theme';
    import type { LanguageUsage } from '@/types';
   
	let { data }: { data: LanguageUsage[] } = $props();
	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		Chart.register(...registerables);
		createChart();

		const unsubscribe = theme.subscribe(() => {
			if (chart) {
				updateChartTheme();
			}
		});

		return () => {
			if (chart) {
				chart.destroy();
			}
			unsubscribe();
		};
	});

	function createChart() {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const isDark = document.documentElement.classList.contains('dark');

		chart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: data.map(d => d.language),
				datasets: [{
					data: data.map(d => d.percentage),
					backgroundColor: data.map(d => d.color),
					borderWidth: 0,
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
							color: isDark ? '#e5e7eb' : '#374151',
							padding: 15,
							font: {
								size: 12
							}
						}
					},
					tooltip: {
						callbacks: {
							label: (context) => {
								return `${context.label}: ${context.parsed}%`;
							}
						}
					}
				}
			}
		});
	}

	function updateChartTheme() {
		const isDark = document.documentElement.classList.contains('dark');
		if (chart.options.plugins?.legend?.labels) {
			chart.options.plugins.legend.labels.color = isDark ? '#e5e7eb' : '#374151';
		}
		chart.update();
	}
</script>

<div class="card">
	<h3 class="text-lg font-semibold mb-4">Language Usage</h3>
	<div class="h-64">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>
