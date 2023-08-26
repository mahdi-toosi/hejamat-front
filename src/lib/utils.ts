import dayjs, { type FormatObject } from 'dayjs'
import jalalidayPlugin from 'jalaliday'
import dayjsTimeZonePlugin from 'dayjs/plugin/timezone'
import dayjsUTCPlugin from 'dayjs/plugin/utc'
dayjs.extend(dayjsUTCPlugin)
dayjs.extend(dayjsTimeZonePlugin)
dayjs.extend(jalalidayPlugin)

const TehranTimeZone = 'Asia/Tehran'

export function jalaliDate(date?: string, format: 'date' | 'dateTime' | string = 'date') {
	if (!date) return undefined
	if (format === 'date') format = 'YYYY/MM/DD'
	else if (format === 'dateTime') format = 'HH:mm YYYY/MM/DD'

	return dayjs(date).tz(TehranTimeZone).calendar('jalali').locale('fa').format(format)
}

export function getJalaliWrapper(date?: string) {
	return dayjs(date).tz(TehranTimeZone).calendar('jalali').locale('fa')
}

export function getGregoryWrapper(date?: string) {
	return dayjs(date, { jalali: true } as FormatObject).tz(TehranTimeZone)
}

export function gregoryDate(date?: string, mode: 'date' | 'dateTime' | string = 'date') {
	if (!date) return false
	const format = mode === 'date' ? 'YYYY/MM/DD' : ' HH:mm YYYY/MM/DD'
	return dayjs(date, { jalali: true } as FormatObject)
		.tz(TehranTimeZone)
		.format(format)
}
