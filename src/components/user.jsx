import React from 'react'
import { Button, TableRow, TableCell, Checkbox } from "@mui/material";
import dateFormat from 'dateformat'
import EditIcon from '@mui/icons-material/Edit';

const User = ({user:{ _id, firstName, lastName, dateOfBirth, maritalStatus}, openModal}) => {
//  console.log(firstName, 'userseraseraseraser') 

  const editUser = (event) => {
    event.stopPropagation() 
    openModal({modalType:'edit', _id})
  }
  return (<>
    <TableRow>
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell align='center'>{firstName}</TableCell>
      <TableCell align='center'>{lastName}</TableCell>
      <TableCell align='center'>
        {dateFormat(dateOfBirth, 'mmm d, yyyy')}  
      </TableCell>
      <TableCell align='center'>{maritalStatus}</TableCell>
      <TableCell align='right'>
        <Button onClick={(event) => editUser(event, _id)}>
        <EditIcon />
        </Button>
      </TableCell>
    </TableRow>
    </>
  );
}
export default User