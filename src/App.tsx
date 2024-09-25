import { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import { QueryClientProvider } from 'react-query'

import { EinsatzTable, FilterSelections } from './components'
import { CURRENT_YEAR, queryClient } from './config'
import { useGetEinsaetze } from './hooks'
import { ApiEinsatzResponse } from './@types'
import TableSkeleton from './components/TableSkeleton'
import KategorieCards from './components/KategorieCards'

const AppRoot = () => {
  const [keyword, selectedKeyword] = useState('Alle')
  const [year, selectYear] = useState(CURRENT_YEAR)
  const [einsaetze, setEinsaetze] = useState<Array<ApiEinsatzResponse> | undefined>(undefined)
  const [filteredEinsaetze, setFilteredEinsaetze] = useState<Array<ApiEinsatzResponse> | undefined>(undefined)

  const { data, isLoading } = useGetEinsaetze({
    params: { year },
    options: {
      onSuccess: data => {
        const sortedData = data.reverse()
        setEinsaetze(sortedData)
        setFilteredEinsaetze(sortedData)
      },
    },
  })

  useEffect(() => {
    if (!isLoading && data) {
      keyword === 'Alle' ? setFilteredEinsaetze(einsaetze) : setFilteredEinsaetze(einsaetze?.filter(e => e.KAT === keyword))
    }
  }, [keyword])

  return (
    <Box>
      <Typography variant="h4" component="div" sx={{ my: 2, mx: 2, color: '#D0121A', fontWeight: 'bold' }}>
        Übersicht Einsätze in {year}
      </Typography>
      <FilterSelections keyword={keyword} year={year} onChangeKeyword={selectedKeyword} onChangeYear={selectYear} />
      <KategorieCards einsaetze={einsaetze} isLoading={isLoading} onPressCategory={selectedKeyword} selectedKeyword={keyword} />
      {isLoading ? <TableSkeleton /> : <EinsatzTable einsaetze={filteredEinsaetze} />
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
