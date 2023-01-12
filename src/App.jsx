import React, { useEffect } from 'react';

import {
  Container,
  Box,
} from '@mui/material';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Home from './components/Home.jsx';
import Form from './components/Form.jsx';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/home');
    }
  }, []);

  return (
    <Box style={{ border: '1px solid red' }}>
      <Container
        style={{ textAlign: 'center', border: '1px solid black' }}
        fixed
      >
        <h1>Kimmy&apos;s Checkbook</h1>
        <Routes>
          <Route path="/login" element={<Form title="Log In" />} />
          <Route path="/register" element={<Form title="Register" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>

    </Box>
  );
};

export default App;
