import React, { useEffect } from 'react';
import {
  Box,

} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';

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
        <Topbar logout={handleLogout} />
        <h1>
          Hello, world
        </h1>
        <Sidebar />
      </Box>
    </Box>
  );
};
export default Home;
