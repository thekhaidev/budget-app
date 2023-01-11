import React, { useEffect } from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
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
      </Container>
    </Box>
  );
};
export default Home;
