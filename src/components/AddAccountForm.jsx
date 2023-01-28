import React, { useState } from 'react';
import axios from 'axios';

import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const AddAccountForm = ({
  open,
  close,
}) => {
  const [formValue, setFormValue] = useState({
    account: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const lower = value.toLowerCase();
    setFormValue({
      [name]: lower,
    });
    console.log(formValue);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/account', formValue)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (

    <Dialog open={open} onClose={close}>
      <DialogTitle>Add Entry</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          sx={{
            textAlign: 'center',
            mt: 3,
            display: 'block',
          }}
        >

          <Box>
            <TextField
              id="account-name-input"
              name="account"
              label="Name"
              type="text"
              required
              onChange={handleInputChange}
            />
          </Box>

          <DialogActions>
            <Button type="submit">Submit</Button>
            <Button
              onClick={close}
            >
              Cancel

            </Button>
          </DialogActions>
        </Box>

      </DialogContent>

    </Dialog>
  );
};

export default AddAccountForm;
