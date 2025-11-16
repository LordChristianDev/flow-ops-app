<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	import { theme } from '@/stores/theme';
	import type { Repository } from '@/types';

	let { data }: { data: Repository[] } = $props();
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
		const sortedData = [...data].sort((a, b) => b.stars - a.stars).slice(0, 5);

		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: sortedData.map(d => d.name),
				datasets: [{
					label: 'Stars',
					data: sortedData.map(d => d.stars),
					backgroundColor: 'rgba(14, 165, 233, 0.8)',
					borderColor: 'rgba(14, 165, 233, 1)',
					borderWidth: 1,
					borderRadius: 6,
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						ticks: {
							color: isDark ? '#9ca3af' : '#6b7280'
						},
						grid: {
							color: isDark ? '#374151' : '#e5e7eb'
						}
					},
					x: {
						ticks: {
							color: isDark ? '#9ca3af' : '#6b7280'
						},
						grid: {
							display: false
						}
					}
				}
			}
		});
	}

	function updateChartTheme() {
		const isDark = document.documentElement.classList.contains('dark');
		if (chart.options.scales) {
			if (chart.options.scales.y) {
				chart.options.scales.y.ticks = {
					...chart.options.scales.y.ticks,
					color: isDark ? '#9ca3af' : '#6b7280'
				};
				chart.options.scales.y.grid = {
					...chart.options.scales.y.grid,
					color: isDark ? '#374151' : '#e5e7eb'
				};
			}
			if (chart.options.scales.x?.ticks) {
				chart.options.scales.x.ticks.color = isDark ? '#9ca3af' : '#6b7280';
			}
		}
		chart.update();
	}
</script>

<div class="card">
	<h3 class="text-lg font-semibold mb-4">Top Repositories by Stars</h3>
	<div class="h-64">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>
