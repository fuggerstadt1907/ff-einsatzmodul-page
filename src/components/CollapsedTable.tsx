import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import { ApiEinsatzResponse } from '../@types'
import { ffKbrVehicles } from '../config'
import Image from './Image'

type Props = {
  row: ApiEinsatzResponse
}

const CollapsedTable: React.FC<Props> = ({ row }) => {
  const isFFKbrVehicle = (vehicle: string) => ffKbrVehicles.includes(vehicle)

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180 }}>Alarmstichwort:</TableCell>
            <TableCell>{row.STW}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: 180 }}>Einsatzlage:</TableCell>
            <TableCell>{row.DESCR}</TableCell>
          </TableRow>
          {row.FZG ? (
            <TableRow>
              <TableCell sx={{ width: 180 }}>Eingesetzte Fahrzeuge:</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'row' }}>
                  {row.FZG?.split(/[;,+]+/).map(fzg => {
                    return isFFKbrVehicle(fzg.trim()) ? (
                      <Box
                        key={fzg}
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {isFFKbrVehicle(fzg.trim()) ? (
                          <Image
                            src={`${process.env.PUBLIC_URL}/assets/vehicles/${fzg
                              .trim()
                              .replace('/', '-')}_Thumbnail.png`}
                          />
                        ) : null}
                        <Typography sx={{ fontSize: 14, my: 1 }}>{fzg.trim()}</Typography>
                      </Box>
                    ) : null
                  })}
                </Box>
              </TableCell>
            </TableRow>
          ) : null}
          <TableRow>
            <TableCell sx={{ width: 180, borderBottom: 'none' }}>Anmerkungen:</TableCell>
            <TableCell sx={{ borderBottom: 'none' }}>
              {row.LAGE}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CollapsedTable