<script>
	import TheHeader from 'components/TheHeader.svelte'
	import 'assets/styles/main.scss'
	import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<TheHeader />

<section class="__content">
	<slot />
</section>

<style>
	.__content {
		@apply p-1;

		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
</style>
