import React from 'react'
import {  Box } from '@mui/system'
import { Modal, TextField } from '@mui/material'
import styled from 'styled-components'
import { useState } from 'react'
import { Button } from '@mui/material'

const style = {
  position: 'absolute',
  top: '20%',
  left: '40%',
  transfrom: 'translate(-50, -90)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000,',
  boxShadow: 24,
  padding: 4,

}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const UserForm = ({setIsModalOpen, modalType, isModalOpen}) => {
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dayOfBirth, setDayOfBirth] = useState('')
  const [placeOfBirth, setplaceOfBirth] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    setIsModalOpen(false)
  }

  return <Modal open={isModalOpen}>
      <Box sx={style}>
        <Form onSubmit={handleSubmit}>
          <TextField placeholder='Gender'
            onChange={(e) => setGender(e.target.value)} 
            value={gender}/>
          <TextField placeholder='email'
            onChange={(e) => setEmail(e.target.value)} 
            value={email}/>
          <TextField placeholder='Enter your First Name'
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstName}/>
          <TextField placeholder='Enter your Last Name'
            onChange={(e) => setLastName(e.target.value)} 
            value={lastName}/>
          <TextField placeholder='Enter your Date of Birth'
            onChange={(e) => setDayOfBirth(e.target.value)} 
            value={dayOfBirth}/>
          <TextField placeholder='Enter your Place of Birth'
            onChange={(e) => setplaceOfBirth(e.target.value)} 
            value={placeOfBirth}/>
          <TextField placeholder='Enter your Maritial Status'
            onChange={(e) => setMaritalStatus(e.target.value)} 
            value={maritalStatus}/>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
      </Box>
    </Modal>
}

export default UserForm