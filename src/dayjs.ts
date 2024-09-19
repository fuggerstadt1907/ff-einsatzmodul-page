import dayjs from 'dayjs'
import 'dayjs/locale/de'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isBetween from 'dayjs/plugin/isBetween'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(isBetween)
dayjs.extend(utc)
dayjs.extend(localeData)
dayjs.extend(weekday)
dayjs.locale('de')
