<script lang="ts">
	import Button from '../components/Button.svelte'

	let mode: boolean = false
</script>

<div>{mode}</div>
<Button
	outlined
	loading={mode}
	label="mahdi : )"
	severity="secondary"
	on:click={() => (mode = !mode)}
/>
