import React from 'react'
import { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Collapse, IconButton, TableCell, TableRow } from '@mui/material'
import dayjs from 'dayjs'

import { ApiEinsatzResponse } from '../@types'
import { mapKeywordToColorSchema, mapKeywordToTextColor } from '../utils'
import CollapsedTable from './CollapsedTable'
import Label from './Label'

type Props = {
  row: ApiEinsatzResponse
}

const Row: React.FC<Props> = ({ row }) => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ width: 20 }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ width: '50px' }} component="th" scope="row">
          {row.NR?.toString()}
        </TableCell>
        <TableCell sx={{ width: '150px' }}>{dayjs(row.VON, 'YYYY-MM-DD').format('DD.MM.YYYY')}</TableCell>
        <TableCell>
          <Label color={mapKeywordToTextColor(row.KAT)} backgroundColor={mapKeywordToColorSchema(row.KAT)}>
            {row.STW}
          </Label>
        </TableCell>

        <TableCell>{row.DESCR}</TableCell>
        <TableCell>
          {row.FZG ? row.FZG?.split(/[;,+]+/).map(fzg => (
            <Label key={fzg} sx={{ m: 1 }} color="black" backgroundColor="rettungsdienst-sonstige">
              {fzg.trim()}
            </Label>
          )) : <Label sx={{ m: 1 }} color="black" backgroundColor="rettungsdienst-sonstige">unbekannt</Label>}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CollapsedTable row={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default Row
