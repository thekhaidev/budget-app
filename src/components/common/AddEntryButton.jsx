import React, { useState } from 'react';

import {
  Button,
  Backdrop,
  Box,
  CircularProgress,
} from '@mui/material';

const AddEntryButton = ({ currentlySelected }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleToggle}
      >
        {' '}
        Add Entry

      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Box>{currentlySelected}</Box>
      </Backdrop>
    </Box>
  );
};
export default AddEntryButton;
