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
  Select,
  MenuItem,
} from '@mui/material';

const AddEntryForm = ({
  open,
  close,
  currentlySelected,
  accountNames,
}) => {
  const [formValue, setFormValue] = useState({
    note: '', amount: '', time: '', type: '', account: '',
  });

  const date = new Date().getTime() / 1000;
  const timeObj = {
    _seconds: date,
  };

  const allValue = 'all';
  const accountArray = accountNames.filter((item) => item !== allValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
      time: timeObj,
    });
    console.log(formValue);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/entry', formValue)
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
              id="note-input"
              name="note"
              label="Note"
              type="text"
              required
              value={formValue.note}
              onChange={handleInputChange}
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
          <Box>
            <Select
              required
              value={formValue.account}
              onChange={handleInputChange}
              name="account"
              displayEmpty
            >
              <MenuItem
                value=""
                sx={{
                  display: 'none',
                }}
              >
                Select an account

              </MenuItem>
              {(currentlySelected === 'all')
                ? accountArray.map((account) => (
                  <MenuItem
                    key={account}
                    value={account}
                  >
                    {account[0].toUpperCase() + account.slice(1)}
                  </MenuItem>
                ))
                : (
                  <MenuItem
                    value={currentlySelected}
                  >
                    {currentlySelected[0].toUpperCase() + currentlySelected.slice(1)}
                  </MenuItem>

                )}
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

export default AddEntryForm;
