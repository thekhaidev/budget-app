import React, { useState } from 'react';
import {
  Button,
  Box,
} from '@mui/material';

import AddAccountForm from '../AddAccountForm.jsx';

const AddAccountButton = ({
  setUserData,
  currentlySelected,
}) => {
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
        currentlySelected={currentlySelected}
        setUserData={setUserData}
      />
    </Box>
  );
};
export default AddAccountButton;
