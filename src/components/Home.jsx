import React, { useEffect } from 'react';
import {
  Container,
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
      <Container>
        <h1>
          Hello, world
        </h1>
        <Sidebar />
        <Button onClick={() => handleLogout()}>Log Out</Button>
      </Container>
    </Box>
  );
};
export default Home;
