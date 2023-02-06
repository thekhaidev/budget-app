import React, {
  useEffect,
//   useState,
} from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Topbar from './Topbar.jsx';

const Profile = ({
  setDarkMode,
  darkMode,
}) => {
  const navigate = useNavigate();
  //   const [userData, setUserData] = useState({});
  //   const [currentlySelected, setCurrentlySelected] = useState('all');
  //   const [defaultSelect, setDefaultSelect] = useState(false);
  //   const transactions = userData[currentlySelected];
  //   const accountNames = Object.keys(userData).sort();
  //   const entryAccountNames = userData.accounts;

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login');
  };
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    // if (authToken) {
    //   axios.get('http://localhost:3000/test')
    //     .then((res) => {
    //       setUserData(res.data);
    //     })
    //     .catch((err) => {
    //       throw new Error(err);
    //     });
    // }

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  return (
    <Box sx={{
      textAlign: 'center',
      mt: 10,
      width: '100%',
      height: '100%',
      border: '1px solid green',
    }}
    >

      <Box component="div">
        <Topbar
          type="profile"
          logout={handleLogout}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />

        <Box sx={{
          mb: 2,
        }}
        >
          <Typography variant="h2">

            Profile

          </Typography>
        </Box>

        {/* <Sidebar
          currentlySelected={currentlySelected}
          select={setCurrentlySelected}
          setUserData={setUserData}
          accountNames={accountNames}
          transactions={transactions}
          entryAccountNames={entryAccountNames}
          defaultSelect={defaultSelect}
        /> */}

        {/* <Button variant="outlined" onClick={() => console.log(userData)}>Data</Button> */}
      </Box>
    </Box>
  );
};
export default Profile;
