import React from 'react';
import {
  Grid,
} from '@mui/material';
import TransCard from './TransCard.jsx';

const TransGrid = ({
  transactions,
  account,
}) => (
  <Grid container spacing={0}>
    {transactions.map((transaction) => (
      <TransCard
        amount={transaction.amount}
        note={transaction.note}
        time={transaction.time}
        account={account}
      />
    )) }
  </Grid>
);
export default TransGrid;
