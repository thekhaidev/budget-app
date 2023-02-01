import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  FormControl,
  TextField,
  Button,
  Container,
} from '@mui/material';
import {
  useNavigate,
} from 'react-router-dom';

import app from '../../firebase.js';

const Form = ({ title }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/home');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleAction = (name) => {
    const authentication = getAuth(app);

    // if (name === 'Register') {
    //   createUserWithEmailAndPassword(authentication, formValue.email, formValue.password)
    //     .then((response) => {
    //       console.log(response);
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    // }

    if (name === 'Log In') {
      signInWithEmailAndPassword(
        authentication,
        formValue.email,
        formValue.password,
      ).then((userCreds) => {
        sessionStorage.setItem('Auth Token', userCreds._tokenResponse.refreshToken);
        navigate('/home');
        // console.log(userCreds._tokenResponse.refreshToken);
      }).catch((err) => {
        console.log(err);
      });
    }
    // console.log(formValue.email);
  };

  return (

    <Container
      sx={{
        textAlign: 'center',
        mt: 10,
        width: { md: '75%' },
        border: '1px solid black',
      }}
      fixed
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Box sx={{
          mt: 10,

        }}
        >
          <h1>Kimmy&apos;s Checkbook</h1>
        </Box>
        <h3>{title}</h3>
        <FormControl sx={{ width: '25ch' }}>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={formValue.email}
            onChange={handleInputChange}
          />

          <TextField
            margin="normal"
            id="password-input"
            name="password"
            label="Password"
            type="text"
            value={formValue.password}
            onChange={handleInputChange}
          />
        </FormControl>

      </Box>
      <Box>
        <Button onClick={() => handleAction(title)}>{title}</Button>
      </Box>
      <Box component="span">
        Register for account
      </Box>

    </Container>
  );
};

export default Form;
