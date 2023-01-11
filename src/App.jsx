import React, { useState } from 'react';

import {
  Container,
  Box,
  FormControl,
  TextField,
} from '@mui/material';

function App() {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    console.log(formValue);
  };

  return (
    <Box style={{ border: '1px solid red' }}>
      <Container
        style={{ textAlign: 'center', border: '1px solid black' }}
        fixed
      >
        <h1>Kimmy&apos;s Checkbook</h1>

        <Box mb={1} component="form" noValidate autoComplete="off">
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
        <Box component="span" />
        Register for account
      </Container>
    </Box>
  );
}

export default App;
