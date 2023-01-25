import React from 'react';
import {
  Grid,
} from '@mui/material';
import TransCard from './TransCard.jsx';

const TransGrid = ({
  amount, note, account, time,
}) => (
  <Grid container spacing={0}>
    <TransCard amount={amount} note={note} account={account} time={time} />
  </Grid>
);
export default TransGrid;
