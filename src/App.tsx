import { useEffect, useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { QueryClientProvider } from 'react-query'

import { EinsatzTable, FilterSelections } from './components'
import { CURRENT_YEAR, queryClient } from './config'
import { useGetEinsaetze, useResponsive } from './hooks'
import { ApiEinsatzResponse } from './@types'
import TableSkeleton from './components/TableSkeleton'
import KategorieCards from './components/KategorieCards'
import { EinsatzCard } from './components/EinsatzCard'
import dayjs from 'dayjs'

const AppRoot = () => {
  const [keyword, selectedKeyword] = useState('Alle')
  const [year, selectYear] = useState(CURRENT_YEAR)
  const [einsaetze, setEinsaetze] = useState<Array<ApiEinsatzResponse> | undefined>(undefined)
  const [filteredEinsaetze, setFilteredEinsaetze] = useState<Array<ApiEinsatzResponse> | undefined>(undefined)

  const isMobile = useResponsive('down', 'md')

  const { data, isLoading } = useGetEinsaetze({
    params: { year },
    options: {
      onSuccess: data => {
        const sortedData = data
          .filter(d => !d.DESCR.includes("Platzhalter")) // Einsatz-Entwürfe rausfiltern
          .map((einsatz, index) => {
            return {
              ...einsatz,
              NR: `${dayjs().year()}-${(index + 1).toString().padStart(3, "0")}`
            }
          }) // Einsatznummer selbst setzen um sprünge zu vermeiden (z.B. von 051 -> 053 da 052 noch draft ist)
          .reverse() // umkehren, damit die neuesten Einsätze oben sind
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
    <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" component="div" sx={{ my: 2, color: '#D0121A', fontWeight: 'bold' }}>
        Übersicht Einsätze in {year}
      </Typography>
      <FilterSelections keyword={keyword} year={year} onChangeKeyword={selectedKeyword} onChangeYear={selectYear} />
      <KategorieCards einsaetze={einsaetze} isLoading={isLoading} onPressCategory={selectedKeyword} selectedKeyword={keyword} />
      {isLoading ? <TableSkeleton /> : (
        isMobile ?
          <Stack direction="column" spacing={2}>
            {filteredEinsaetze?.map(einsatz => <EinsatzCard key={einsatz.NR} einsatz={einsatz} />)}
          </Stack> : <EinsatzTable einsaetze={filteredEinsaetze} />
      )
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
