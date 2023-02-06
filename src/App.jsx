import React, { useEffect, useState } from 'react';

import {
  Box,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Home from './components/Home.jsx';
import Form from './components/Form.jsx';
import Profile from './components/Profile.jsx';
import mainTheme from './components/common/styles/mainTheme.js';
import darkTheme from './components/common/styles/darkTheme.js';

const App = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
      <CssBaseline />
      <Box sx={{
        height: '100%',
        overflowY: 'scroll',
        textAlign: 'center',
      }}
      >

        <Routes>
          <Route path="/login" element={<Form title="Log In" />} />
          {/* <Route path="/register" element={<Form title="Register" />} /> */}
          <Route path="/home" element={<Home setDarkMode={setDarkMode} darkMode={darkMode} />} />
          <Route path="/profile" element={<Profile setDarkMode={setDarkMode} darkMode={darkMode} />} />
          <Route path="/" element={<Home setDarkMode={setDarkMode} darkMode={darkMode} />} />
        </Routes>

      </Box>
    </ThemeProvider>
  );
};

export default App;
