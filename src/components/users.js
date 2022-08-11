import React, {useState} from 'react'
import {Table, Paper, TableBody} from '@mui/material'
import {Box} from '@mui/system'
import User from './user'
import TableHead from './table-head'
import UserForm from './userForm'

const Users = ({users}) => {

  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('firstName')
  const [modalType, setModalType] = useState(null) //create-type || 'edit-type' {modalType:'edit-mode', _id}
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc': 'asc')
    setOrderBy(property)
  }

  const openModal = (selectedModal) => {
    setModalType(selectedModal)
    setIsModalOpen(true)
  }

  return <Box sx={{width: '100%'}}>
    <Paper sx={{width: '100%', mb:2}}>
      <Table>
        <TableHead order='asc' rowCount ={users.length} orderyBy={orderBy} handleSortRequest={handleSortRequest} />
          <TableBody>
            {users
            .sort(({[orderBy]: A}, {[orderBy]: B}) => {
              if (A > B) return order === 'asc' ? 1 : -1
              if (A < B) return order === 'asc' ? -1 : 1
              return 0
            })
            .map(user => <User user={user} key={user._id} openModal={openModal}/>)}
          </TableBody>
        
      </Table>
    </Paper>
    {isModalOpen && (<UserForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType} />)}
  </Box>
  
}

export default Users;