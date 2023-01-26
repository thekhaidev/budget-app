import React from 'react';
import {
  Grid,
} from '@mui/material';
import TransCard from './TransCard.jsx';

const TransGrid = ({
  transactions,
}) => (
  <Grid container spacing={0}>
    {transactions.map((transaction) => (
      <TransCard
        key={transaction.id}
        id={transaction.id}
        amount={transaction.amount}
        note={transaction.note}
        time={transaction.time._seconds}
        account={transaction.account}
      />
      // <button
      //   type="button"
      //   onClick={() => console.log(account)}
      // >
      //   Click

      // </button>
    )) }
  </Grid>
);
export default TransGrid;
