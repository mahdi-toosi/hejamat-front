<script lang="ts">
	import spinner from 'assets/icons/90-ring.svg'
	type Severity = 'primary' | 'danger' | 'secondary'

	export let icon: string = ''
	export let label: string = ''
	export let text: boolean = false
	export let loading: boolean = false
	export let outlined: boolean = false
	export let disabled: boolean = false
	export let severity: Severity = 'primary'

	let severities = {
		danger: '#ff4c6a',
		primary: '#2196f3',
		secondary: '#64748b'
	} as Record<Severity, string>
</script>

<button
	{disabled}
	class:text
	class:outlined
	style="--color: {severities[severity]}"
	class:iconOnly={icon.length && !label.length}
	on:click
>
	{#if icon}
		<img
			class="icon"
			style="--visibility: {loading ? 'hidden' : 'visible'}"
			src={icon}
			alt="button icon"
		/>
	{/if}

	{#if label}
		<span class="label" style="--visibility: {loading ? 'hidden' : 'visible'}">{label}</span>
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
