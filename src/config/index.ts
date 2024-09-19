import dayjs from 'dayjs'

export * from './queryClient'

export const BASE_URL = 'https://webservice.feuerwehr-koenigsbrunn.org/mpfeuer/einsatz.php'

export const CURRENT_YEAR = dayjs().year().toString()
export const API_KEY = process.env.REACT_APP_API_KEY || ''

export const ffKbrVehicles = [
  '10/1',
  '12/1',
  '14/1',
  '65/1',
  '40/1',
  '41/1',
  '40/2',
  '48/1',
  '30/1',
  '62/1',
  '55/1',
  '21/1',
  'Boot',
  'VSA',
]
