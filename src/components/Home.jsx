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
import AddEntryButton from './common/AddEntryButton.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [currentlySelected, setCurrentlySelected] = useState('all');
  const transactions = userData[currentlySelected];
  const accountNames = Object.keys(userData);
  const entryAccountNames = userData.accounts;

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
          <AddEntryButton
            currentlySelected={currentlySelected}
            entryAccountNames={entryAccountNames}
            accountNames={accountNames}
          />
        </Box>
        <Box sx={{
          mb: 2,
        }}
        >
          {' '}
          {transactions
            ? (
              <TransGrid
                transactions={transactions}
                account={currentlySelected}
                setUserData={setUserData}
                accountNames={accountNames}
              />
            )
            : <CircularProgress />}
          <Sidebar
            currentlySelected={currentlySelected}
            select={setCurrentlySelected}
            setUserData={setUserData}
            accountNames={accountNames}
            transactions={transactions}
            entryAccountNames={entryAccountNames}

          />
        </Box>
        <Button variant="outlined" onClick={() => console.log(userData)}>Data</Button>
      </Box>
    </Box>
  );
};
export default Home;
