import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import app from '../../firebase.js';

const Form = ({ title }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    console.log(formValue);
  };

  const handleAction = (e, name) => {
    const authentication = getAuth(app);
    e.preventDefault();
    if (name === 'Register') {
      createUserWithEmailAndPassword(authentication, formValue.email, formValue.password)
        .then((response) => {
          console.log(response);
        });
    }

    if (name === 'Log In') {
      signInWithEmailAndPassword(
        authentication,
        formValue.email,
        formValue.password,
      ).then((userCreds) => {
        sessionStorage.setItem('Auth Token', userCreds._tokenResponse.refreshToken);
        // console.log(userCreds._tokenResponse.refreshToken);
      }).catch((err) => {
        console.log(err);
      });
    }
    // console.log(formValue.email);
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
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
        <Button onClick={(e) => handleAction(e, title)}>{title}</Button>
      </Box>
      <Box component="span">
        Register for account
      </Box>
    </>
  );
};

export default Form;
