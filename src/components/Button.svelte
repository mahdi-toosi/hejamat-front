<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	// utils
	import spinner from 'assets/icons/90-ring.svg'
	// types
	import type { Severity } from 'types/Button'

	const dispatch = createEventDispatcher()

	export let icon: string = ''
	export let text: boolean = false
	export let loading: boolean = false
	export let outlined: boolean = false
	export let disabled: boolean = false
	export let label: string | number = ''
	export let severity: Severity = 'primary'

	let severities = {
		warn: '#ff9e13',
		danger: '#ff4c6a',
		primary: '#2196f3',
		success: '#06d612',
		secondary: '#64748b'
	} as Record<Severity, string>

	function onClick(event: Event) {
		if (loading) return
		dispatch('click', event)
	}
</script>

<button
	{disabled}
	class:text
	class:outlined
	on:click={onClick}
	style="--color: {severities[severity]}"
	class:iconOnly={icon.length && !String(label).length}
>
	{#if icon}
		<i
			class={`icon ${icon}`}
			style="--visibility: {loading ? 'hidden' : 'visible'}"
		/>
	{/if}

	{#if label}
		<span
			class="label"
			style="--visibility: {loading ? 'hidden' : 'visible'}">{label}</span
		>
	{/if}

	{#if loading}
		<img class="spinner" src={spinner} alt="loading spinner" />
	{/if}
</button>

<style>
	button {
		@apply relative flex items-center gap-2;
		color: white;
		cursor: pointer;
		user-select: none;
		border-radius: 6px;
		background: var(--color);
		transition: all 0.3s ease;
		padding: 0.4375rem 0.875rem;
		border: 1px solid transparent;
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	button:enabled:hover {
		filter: brightness(0.85);
	}

	button:focus {
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color), 0 1px 2px #000;
	}

	button.text {
		color: var(--color);
		background: transparent;
	}

	button.outlined {
		color: var(--color);
		background: transparent;
		border: 1px solid var(--color) !important;
	}

	button.iconOnly {
		@apply justify-center;
		width: 2.5rem;
		padding: 0.4375rem 0;
	}

	button .icon {
		font-size: 1.3rem;
		visibility: var(--visibility);
	}

	button .label {
		@apply flex-1;
		white-space: nowrap;
		visibility: var(--visibility);
	}

	.spinner {
		@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
	}
</style>
