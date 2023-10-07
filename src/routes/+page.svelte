<script lang="ts">
	import TheAdvices from 'components/TheAdvices.svelte'
	import TheCalendar from 'components/TheCalendar.svelte'
</script>

<section
	class="flex flex-col md:flex-row justify-between mx-auto mt-10 md:mt-24"
	style="max-width: 75rem;"
>
	<div>
		<small>پیامبر اکرم</small>
		<h1 class="text-lg">
			پنج چیز از سنتهای پیغمبران است: حیا، حلم، حجامت، مسواک و عطر زدن.
		</h1>
		<small>نهج الفصاحه ص۴۶۲ ، ح ۱۴۶۳</small>
	</div>

	<TheCalendar />
</section>

<TheAdvices />
