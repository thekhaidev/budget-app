import React, { useState } from 'react';

import {
  Box,
  FormControl,
  TextField,
  Button,
} from '@mui/material';

function Form() {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    console.log(formValue);
  };

  const showAlert = () => {
    alert('kekekeke');
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <h3>Log In</h3>
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
        <Button onClick={showAlert}>Log In</Button>
      </Box>
      <Box component="span">
        Register for account
      </Box>
    </>
  );
}

export default Form;
