import React, { useState } from 'react';
import {
  Button,
  Box,
} from '@mui/material';
import AddEntryForm from '../AddEntryForm.jsx';

const AddEntryButton = ({ currentlySelected }) => {
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
        variant="outlined"
        onClick={handleClickOpen}
      >
        {' '}
        Add Entry

      </Button>
      <AddEntryForm open={open} close={handleClose} currentlySelected={currentlySelected} />
    </Box>
  );
};
export default AddEntryButton;
