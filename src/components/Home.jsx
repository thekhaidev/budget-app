import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';

const Home = ({ userData }) => {
  const navigate = useNavigate();
  const [currentlySelected, setCurrentlySelected] = useState('checking');
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login');
  };
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
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
        <h1>
          Hello, world
        </h1>
        <Button variant="outlined" onClick={() => console.log(userData[currentlySelected])}>Data</Button>
        <Sidebar userData={userData} />
      </Box>
    </Box>
  );
};
export default Home;
