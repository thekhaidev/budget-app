import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
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
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/home');
      axios.get('http://localhost:3000/test')
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Box sx={{
      border: '1px solid red',
      height: '95vh',
      width: 'auto',
      overflow: 'hidden',
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
  );
};

export default App;
