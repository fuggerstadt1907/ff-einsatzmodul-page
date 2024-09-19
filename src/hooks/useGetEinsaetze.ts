import { UseQueryOptions, useQuery } from 'react-query'

import { ApiEinsatzResponse } from '../@types'
import { API_KEY, BASE_URL, CURRENT_YEAR } from '../config'
import { objectHasTruthyValuesOnly } from '../utils'

interface GetEinsaetzeParams {
  year?: string
  count?: string
  offset?: string
}

interface GetEinsaetzeResponse extends Array<ApiEinsatzResponse> { }

type GetEinsaetze = (params: GetEinsaetzeParams) => Promise<GetEinsaetzeResponse>

const getEinsaetze: GetEinsaetze = async ({ year, count, offset }) => {
  const searchParams = new URLSearchParams({ jahr: year ?? CURRENT_YEAR, apikey: API_KEY })
  const response = (await fetch(BASE_URL + '?' + searchParams)).json()
  return response as any
}

const useGetEinsaetze = ({
  params,
  options,
}: {
  params: GetEinsaetzeParams
  options?: UseQueryOptions<GetEinsaetzeResponse, Error>
}) =>
  useQuery<GetEinsaetzeResponse, Error>(['einsaetze', params], () => getEinsaetze(params), {
    enabled: objectHasTruthyValuesOnly(params),
    ...options,
  })

export default useGetEinsaetze
