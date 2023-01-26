import React from 'react';

import {

  Button,
} from '@mui/material';

const DeleteButton = ({ account, id }) => (
  <Button
    variant="outline"
    size="small"
    onClick={() => {
      console.log(account, id);
    }}
  >
    Delete
  </Button>
);

export default DeleteButton;
