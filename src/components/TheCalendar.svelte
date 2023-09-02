<script lang="ts">
	import { onMount } from 'svelte'
	// utils
	import calendarData from 'assets/data/calendar.json'
	import {
		getJalaliWrapper as JDayjs,
		getGregoryWrapper as dayjs
	} from '$lib/utils'
	// components
	import Button from './Button.svelte'
	// types
	import type { Severity } from 'types/Button'
	import AppTooltip from './AppTooltip.svelte'

	type Day = { dayNum: number; date: string; severity: Severity }

	let fromDate: string
	let weeks: Day[][] = []
	const dateFormat = 'YYYY-MM-DD'
	const today = new Date().toISOString().split('T')[0]

	const daySeverityProxy = {
		good: 'success',
		bad: 'danger',
		best: 'primary',
		notSuggested: 'warn'
	} as Record<string, Severity | undefined>

	const dayTooltipProxy = {
		success: 'روز خوب',
		primary: 'روز عالی',
		danger: 'روز بد',
		warn: 'پیشنهاد نمی شود'
	} as Record<Severity, string>

	function nextMonth() {
		const jDate = JDayjs(fromDate).add(1, 'month').format(dateFormat)
		fromDate = dayjs(jDate).format(dateFormat)
		setWeeks()
	}

	function previousMonth() {
		const jDate = JDayjs(fromDate).subtract(1, 'month').format(dateFormat)
		fromDate = dayjs(jDate).format(dateFormat)
		setWeeks()
	}

	function getFirstOfTheMonth() {
		const firstDayOfJMonth = JDayjs(today).startOf('month')

		const firstDayOfGMonth = dayjs(
			firstDayOfJMonth.format(dateFormat)
		).format(dateFormat) as string
		return firstDayOfGMonth
	}

	function calcSeverity(jDate: string) {
		const dayName = dayjs(jDate).format('dddd')
		if (dayName === 'Friday') return daySeverityProxy.bad
		if (dayName === 'Wednesday') return daySeverityProxy.notSuggested
		if (calendarData.goodDays.includes(jDate)) return daySeverityProxy.good
		if (calendarData.bestDays.includes(jDate)) return daySeverityProxy.best
	}

	function setWeeks() {
		weeks = []

		const monthDays = JDayjs(fromDate).daysInMonth()
		const days = [] as Day[]
		for (let i = 1; i < monthDays + 1; i++) {
			const jDate = JDayjs(fromDate)
				.startOf('month')
				.set('date', i)
				.format(dateFormat)

			const gDate = dayjs(jDate).format(dateFormat) as string
			const day = {
				dayNum: i,
				date: gDate,
				severity: calcSeverity(jDate)
			} as Day

			days.push(day)
		}

		const firstDayOfGMonth = JDayjs(fromDate).startOf('month').day()
		// if its saturday we don't need to add empty days
		if (firstDayOfGMonth !== 6) {
			const firstDayOfJMonth = firstDayOfGMonth + 1 // its not saturday
			for (let i = 0; i < firstDayOfJMonth; i++) {
				days.unshift({} as Day)
			}
		}
		while (days.length < 35) {
			days.push({} as Day)
		}

		const _weeks = [] as Day[][]
		for (let index = 0; index < days.length / 7; index++) {
			_weeks.push(days.slice(index * 7, (index + 1) * 7))
		}

		weeks = _weeks
	}

	function setCurrentMonth() {
		fromDate = getFirstOfTheMonth()
		setWeeks()
	}

	onMount(() => {
		setCurrentMonth()
	})
</script>

<div class="wrapper">
	<div class="flex items-center justify-between">
		<Button
			text
			severity="secondary"
			on:click={previousMonth}
			icon="fa-solid fa-chevron-right"
		/>

		<h2>{JDayjs(fromDate).format('MMMM  YYYY ')}</h2>

		<Button
			text
			severity="secondary"
			on:click={nextMonth}
			icon="fa-solid fa-chevron-left"
		/>

		<!-- <Button on:click={setCurrentMonth} icon="fa-solid fa-arrow-turn-down" text /> -->
	</div>

	<div class="__calendar">
		<div class="__title"><span>شنبه</span> <span>ش</span></div>
		<div class="__title"><span>1 شنبه</span> <span>ی</span></div>
		<div class="__title"><span>2 شنبه</span> <span>د</span></div>
		<div class="__title"><span>3 شنبه</span> <span>س</span></div>
		<div class="__title"><span>4 شنبه</span> <span>چ</span></div>
		<div class="__title"><span>5 شنبه</span> <span>پ</span></div>
		<div class="__title"><span>جمعه</span> <span>ج</span></div>

		{#each weeks as week}
			{#each week as day}
				<div class="__day">
					<AppTooltip title={dayTooltipProxy[day.severity]}>
						<Button
							severity={day.severity || 'secondary'}
							outlined={!day.severity}
							label={day.dayNum}
							disabled={!day.dayNum}
						/>
					</AppTooltip>
				</div>
			{/each}
		{/each}
	</div>
</div>

<style>
	.wrapper {
		max-width: 23.4rem;
		margin-bottom: 4px;
	}

	.__calendar {
		@apply flex flex-wrap;
	}

	.__calendar div {
		@apply text-center;

		margin: 1px;
		width: 3.2rem;
	}

	.__calendar .__day :global(button) {
		width: 100%;
		height: 3.2rem;
	}

	.__calendar .__title span:first-child {
		@apply hidden;
	}
	@media (min-width: 768px) {
		.__calendar .__title span:first-child {
			display: block;
		}
	}

	.__calendar .__title span:last-child {
		@apply block;
	}
	@media (min-width: 768px) {
		.__calendar .__title span:last-child {
			display: none;
		}
	}
</style>
