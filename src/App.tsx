import { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import { QueryClientProvider } from 'react-query'

import { EinsatzTable, FilterSelections } from './components'
import { CURRENT_YEAR, queryClient } from './config'
import { useGetEinsaetze } from './hooks'
import { ApiEinsatzResponse } from './@types'
import TableSkeleton from './components/TableSkeleton'

const AppRoot = () => {
  const [keyword, selectedKeyword] = useState('alle')
  const [year, selectYear] = useState(CURRENT_YEAR)
  const [einsaetze, setEinsaetze] = useState<Array<ApiEinsatzResponse> | undefined>(undefined)

  const { data, isLoading } = useGetEinsaetze({
    params: { year },
    options: {
      onSuccess: data => {
        // const fakedData = [...data, data[0].FZG = '10/1, 12/1, 40/1, 40/2']
        // console.log(fakedData)
        // @ts-ignore
        keyword === 'alle' ? setEinsaetze(data) : setEinsaetze(data.filter(e => e.KAT === keyword))
      },
    },
  })

  useEffect(() => {
    if (!isLoading && data) {
      keyword === 'alle' ? setEinsaetze(data) : setEinsaetze(data.filter(e => e.KAT === keyword))
    }
  }, [keyword])

  return (
    <Box>
      <Typography variant="h4" component="div" sx={{ my: 2, mx: 2, color: '#D0121A', fontWeight: 'bold' }}>
        Übersicht Einsätze
      </Typography>
      <FilterSelections keyword={keyword} year={year} onChangeKeyboard={selectedKeyword} onChangeYear={selectYear} />
      {isLoading ? <TableSkeleton /> : <EinsatzTable einsaetze={einsaetze} />
      }
    </Box>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoot />
    </QueryClientProvider>
  )
}

export default App
