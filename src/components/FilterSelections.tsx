import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { keywords } from '../@mocks'
import { getLastYearsArray } from '../utils'

type Props = {
  keyword: string
  year: string
  onChangeKeyword: (keyboard: string) => void
  onChangeYear: (year: string) => void
}

export const FilterSelections: React.FC<Props> = ({ keyword, year, onChangeKeyword, onChangeYear }) => {
  const yearsArray = getLastYearsArray(3)

  const handleChangeKeyword = (event: SelectChangeEvent) => {
    onChangeKeyword(event.target.value as string)
  }

  const handleChangeYear = (event: SelectChangeEvent) => {
    onChangeYear(event.target.value as string)
    onChangeKeyword('Alle')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Box sx={{ my: 3, display: 'flex', flex: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="einsatz-year-select-label">Jahr</InputLabel>
          <Select
            labelId="einsatz-year-select-label"
            id="einsatz-year-select"
            value={year}
            label="Jahr"
            onChange={handleChangeYear}>
            {yearsArray.map(date => (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ my: 3, display: 'flex', flex: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="einsatz-keyword-select-label">Stichwort</InputLabel>
          <Select
            labelId="einsatz-keyword-select1-label"
            id="einsatz-keyword-select1"
            placeholder="Alle"
            value={keyword}
            label="Stichwort"
            onChange={handleChangeKeyword}>
            {keywords.map(keyword => (
              <MenuItem key={keyword} value={keyword}>
                {keyword}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default FilterSelections
