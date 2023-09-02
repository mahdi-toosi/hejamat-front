<script lang="ts">
	export let title = ''

	let isHovered = false
	let x: number
	let y: number

	function mouseOver(event: MouseEvent) {
		isHovered = true
		x = event.pageX + 5
		y = event.pageY + 5
	}
	function mouseMove(event: MouseEvent) {
		x = event.pageX + 5
		y = event.pageY + 5
	}
	function mouseLeave() {
		isHovered = false
	}
</script>

<div
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
>
	<slot />
</div>

{#if isHovered && title.length}
	<div style="top: {y}px; left: {x + 8}px;" class="tooltip">{title}</div>
{/if}

<style>
	.tooltip {
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 4px;
		z-index: 1;
		position: absolute;
	}
</style>
