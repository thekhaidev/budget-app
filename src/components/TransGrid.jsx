import React from 'react';
import {
  Grid,
} from '@mui/material';
import TransCard from './TransCard.jsx';

const TransGrid = ({ amount, note }) => (
  <Grid container spacing={0}>
    <TransCard amount={amount} note={note} />
  </Grid>
);
export default TransGrid;
