import React, { useEffect } from 'react';

import {
  Box,
  ThemeProvider,
} from '@mui/material';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Home from './components/Home.jsx';
import Form from './components/Form.jsx';
import MainTheme from './components/common/styles/MainTheme.js';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/home');
    }
  }, []);

  return (
    <ThemeProvider theme={MainTheme}>
      <Box sx={{
        height: '100%',
        overflowY: 'scroll',
        textAlign: 'center',
      }}
      >

        <Routes>
          <Route path="/login" element={<Form title="Log In" />} />
          {/* <Route path="/register" element={<Form title="Register" />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Box>
    </ThemeProvider>
  );
};

export default App;
