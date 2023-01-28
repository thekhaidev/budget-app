import React, { useState } from 'react';
import {
  Button,
  Box,
} from '@mui/material';

import AddAccountForm from '../AddAccountForm.jsx';

const AddAccountButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
      >
        {' '}
        Add Account
      </Button>
      <AddAccountForm
        open={open}
        close={handleClose}
      />
    </Box>
  );
};
export default AddAccountButton;
