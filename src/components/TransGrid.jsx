import React from 'react';
import {
  Grid,
} from '@mui/material';
import TransCard from './TransCard.jsx';

const TransGrid = ({ amount, note, account }) => (
  <Grid container spacing={0}>
    <TransCard amount={amount} note={note} account={account} />
  </Grid>
);
export default TransGrid;
