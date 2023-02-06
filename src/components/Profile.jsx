import React, {
  useEffect,
//   useState,
} from 'react';
import {
  Box,
  Typography,
  Card,
  Avatar,
  Button,
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

        <Card
          elevation={3}
          sx={{
            height: '50vh',
            width: '50%',
            border: '1px solid orange',
            ml: 35,
            mb: 3,
          }}
        >
          <Avatar
            sx={{
              height: 100,
              width: 100,
              mx: 'auto',
              mt: 3,
              mb: 1,
            }}
          >
            U

          </Avatar>
          <Box
            variant="span"
            sx={{
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
            >
              Change Profile Picture
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography>
              Name: User One
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography>
              Address: 123 Niceplace Way
              Atlanta, GA
              00001
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography>
              Email: test@test.com
            </Typography>
          </Box>
          <Button>
            Edit
          </Button>
        </Card>

      </Box>
      <Button
        onClick={() => navigate('/home')}
      >
        Exit
      </Button>
    </Box>
  );
};
export default Profile;
