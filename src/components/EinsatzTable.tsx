import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { EinsatzRow } from '.'
import { ApiEinsatzResponse } from '../@types'

type Props = {
  einsaetze: ApiEinsatzResponse[] | undefined
}

const EinsatzTable: React.FC<Props> = ({ einsaetze }) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead sx={{ backgroundColor: '#D0121A' }}>
            <TableRow>
              <TableCell />
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Nr.</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Datum</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Stichwort</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Beschreibung</TableCell>
              {/* <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Fahrzeuge</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {einsaetze &&
              einsaetze.map(row => {
                return <EinsatzRow key={row.NR + row.VON} row={row} />
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default EinsatzTable
