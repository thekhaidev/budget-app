import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import TransGrid from './TransGrid.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    all:
  'test',
  });
  const [currentlySelected, setCurrentlySelected] = useState('checking');
  const transactions = userData[currentlySelected];
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login');
  };
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      axios.get('http://localhost:3000/test')
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      navigate('/home');
    }

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  return (
    <Box sx={{
      textAlign: 'center',
      border: '1px solid black',
      mt: 10,
      ml: { md: '19.5%' },
      width: { md: '75%' },
    }}
    >

      <Box component="div">
        <Topbar logout={handleLogout} />

        <Box sx={{
          mb: 2,
        }}
        >
          <h1>
            {currentlySelected[0].toUpperCase() + currentlySelected.slice(1)}
          </h1>
          <Button variant="outlined"> Add Entry</Button>

        </Box>
        <Box sx={{
          mb: 2,
        }}
        >
          {' '}
          {transactions
            ? (
              <TransGrid
                note={transactions[0].note}
                amount={transactions[0].amount}
                time={transactions[0].time._seconds}
                account={currentlySelected}
              />
            )
            : <CircularProgress />}
          <Sidebar select={setCurrentlySelected} userData={userData} />
        </Box>
        <Button variant="outlined" onClick={() => console.log(transactions)}>Data</Button>
      </Box>
    </Box>
  );
};
export default Home;
