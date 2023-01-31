import React from 'react';
import axios from 'axios';

import {

  Button,
} from '@mui/material';
import {
  useNavigate,
} from 'react-router-dom';

const DeleteButton = ({
  account,
  id,
  setUserData,
  setCurrentlySelected,
}) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    const postObj = {
      account,
      id,
    };
    setCurrentlySelected('all');
    axios.post('http://localhost:3000/delete', postObj)
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });

    axios.get('http://localhost:3000/test')
      .then((res) => {
        setUserData(res.data);
      }).then(() => navigate('/home'))
      .catch((err) => {
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
