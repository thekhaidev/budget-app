import React from 'react';

import {
  Button,
} from '@mui/material';

const AddEntryButton = ({ currentlySelected }) => (
  <Button
    variant="outlined"
    onClick={() => console.log(currentlySelected)}
  >
    {' '}
    Add Entry

  </Button>
);
export default AddEntryButton;
