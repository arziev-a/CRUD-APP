import React, { useEffect } from "react";
import { useState } from "react";
import Users from './components/users'

import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await axios.get(
          "https://user-list-seytech.herokuapp.com/users"
        );

        setUser(data);
      };
      getData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (user.length < 1) {
    return (<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>)
  }
  return <Users users={user} />
}
