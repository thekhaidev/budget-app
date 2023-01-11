import React, { useState } from 'react';

import {
  Box,
  FormControl,
  TextField,
  Button,
} from '@mui/material';

const Form = ({ title }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    console.log(formValue);
  };

  const handleAction = (name) => {
    console.log(name);
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
        <Button onClick={handleAction(title)}>{title}</Button>
      </Box>
      <Box component="span">
        Register for account
      </Box>
    </>
  );
};

export default Form;
