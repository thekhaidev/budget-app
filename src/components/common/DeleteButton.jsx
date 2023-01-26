import React from 'react';
import Axios from 'axios';

import {

  Button,
} from '@mui/material';

const DeleteButton = ({ account, id }) => {
  const handleSubmit = () => {
    Axios.post('http://localhost:3000/delete', {})
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      variant="outline"
      size="small"
      onClick={handleSubmit}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
