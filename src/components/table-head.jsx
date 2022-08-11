import { Box, TableCell, Checkbox, TableHead as MuiTableHead, TableRow } from '@mui/material'
import {visuallyHidden} from '@mui/utils'

const TABLE_HEADER_NAMES = {
  firstName:'First Name',
  lastName: 'Last Name',
  dateOfBirth: 'D.O.B',
  maritialStatus: 'Maritial Status'
}
 const TableHead = ({order, orderBy, handleSortRequest}) => {
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
        {Object.entries(TABLE_HEADER_NAMES).map(([key,value]) => {
          return <TableCell key={key} align='center' 
            sortDirection={order ?? false} 
            width='18%'
            onClick={() => handleSortRequest(key)}>
            {value}
            {orderBy === key ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending': 'sorted ascending'}
              </Box>
            ): null}
          </TableCell>
        })}
        <TableCell align="right"></TableCell>
      </TableRow>
    </MuiTableHead>
  )
}

export default TableHead