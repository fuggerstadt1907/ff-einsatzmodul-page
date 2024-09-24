import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import { ApiEinsatzResponse } from '../@types'
import { ffKbrVehicles } from '../config'
import Image from './Image'
import dayjs from 'dayjs'
import { useResponsive } from '../hooks'

type Props = {
  row: ApiEinsatzResponse
}

const CollapsedTable: React.FC<Props> = ({ row }) => {
  const isFFKbrVehicle = (vehicle: string) => ffKbrVehicles.includes(vehicle)
  const isMobile = useResponsive('down', 'md')

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: isMobile ? 10 : 180 }}>Alarmart:</TableCell>
            <TableCell>{row.ART}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: isMobile ? 10 : 180 }}>Alarmierung:</TableCell>
            <TableCell>{dayjs(row.VON, 'YYYY-MM-DD HH:MM:ss').format('HH:MM')} Uhr</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: isMobile ? 10 : 180 }}>Einsatzlage:</TableCell>
            <TableCell>{row.DESCR}</TableCell>
          </TableRow>
          {row.FZG ? (
            <TableRow>
              <TableCell sx={{ width: isMobile ? 10 : 180 }}>Eingesetzte Fahrzeuge:</TableCell>
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
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CollapsedTable
