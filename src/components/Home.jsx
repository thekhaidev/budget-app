import React, { useEffect } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const Home = () => {
  const navigate = useNavigate();
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
    <Box>
      <Box component="div">
        <h1>
          Hello, world
        </h1>
        <Sidebar />
      </Box>
      <Button onClick={() => handleLogout()}>Log Out</Button>
    </Box>
  );
};
export default Home;
