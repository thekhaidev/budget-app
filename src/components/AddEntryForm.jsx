import React, { useState } from 'react';

import {
  Box,
  FormControl,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
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
    note: '', amount: '', time: '', type: '',
  });

  const date = new Date().getTime() / 1000;
  const timeObj = {
    _seconds: date,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
      time: timeObj,
    });
    console.log(formValue);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setFormValue({
      ...formValue,
      type: value,
    });
  };

  const handleSubmit = () => {
    console.log(timeObj);
  };

  return (

    <Dialog open={open} onClose={close}>
      <DialogTitle>Add Entry</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          autoComplete="off"
          sx={{
            textAlign: 'center',
            mt: 3,
          }}
        >

          <FormControl sx={{ width: '25ch' }}>
            <TextField
              id="note-input"
              name="note"
              label="Note"
              type="text"
              value={formValue.note}
              onChange={handleInputChange}
            />

            <TextField
              margin="normal"
              id="amount-input"
              name="amount"
              label="Amount"
              type="number"
              value={formValue.amount}
              onChange={handleInputChange}
            />
            <Select
              onChange={handleSelect}
              defaultValue="select-an-account"
            >
              {/* <MenuItem value="checking">Checking</MenuItem>
              <MenuItem value="saving">Saving</MenuItem> */}
              <MenuItem
                value="select-an-account"
                sx={{
                  display: 'none',
                }}
              >
                Select an account

              </MenuItem>
              {(currentlySelected === 'all')
                ? accountNames.map((account) => (
                  <MenuItem
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

          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>Date</Button>
        <Button onClick={close}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEntryForm;
