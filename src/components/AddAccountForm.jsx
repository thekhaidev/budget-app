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
  MenuItem,
  Select,
} from '@mui/material';

const AddAccountForm = ({
  open,
  close,
  setUserData,
}) => {
  const [formValue, setFormValue] = useState({
    note: '', amount: '', time: '', type: '', account: '',
  });

  const date = new Date().getTime() / 1000;
  const timeObj = {
    _seconds: date,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'account') {
      const lower = value.toLowerCase();
      setFormValue({
        ...formValue,
        [name]: lower,
        time: timeObj,
      });
      // console.log(lower);
    } else {
      (
        setFormValue({
          ...formValue,
          [name]: value,
          time: timeObj,
        })
      );
    }
    console.log(formValue);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/entry', formValue)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios.get('http://localhost:3000/test')
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <Dialog open={open} onClose={close}>
      <DialogTitle>Add Account</DialogTitle>
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
              label="Account Name"
              type="text"
              required
              onChange={handleInputChange}
            />
          </Box>

          <Box>
            <TextField
              id="note-input"
              name="note"
              label="Note"
              type="text"
              required
              value={formValue.note}
              onChange={handleInputChange}
              sx={{
                mt: 2,
              }}
            />
          </Box>

          <Box>
            <TextField
              margin="normal"
              required
              id="amount-input"
              name="amount"
              label="Amount"
              type="number"
              value={formValue.amount}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <Select
              required
              value={formValue.type}
              onChange={handleInputChange}
              name="type"
              displayEmpty
            >
              <MenuItem
                value=""
                sx={{
                  display: 'none',
                }}
              >
                Transaction Type
              </MenuItem>
              <MenuItem
                value="debit"
              >
                Debit

              </MenuItem>
              <MenuItem
                value="credit"
              >
                Credit

              </MenuItem>
            </Select>
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
