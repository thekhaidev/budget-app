import React from 'react';
import {
  Grid,
} from '@mui/material';
import TransCard from './TransCard.jsx';

const TransGrid = ({
  transactions,
  setUserData,
  accountNames,
  setCurrentlySelected,
}) => (
  <Grid container spacing={0}>
    {transactions.sort((a, b) => new Date(b.time._seconds) - new Date(a.time._seconds))
      .map((transaction) => (
        <TransCard
          key={transaction.id}
          id={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          note={transaction.note}
          time={transaction.time._seconds}
          account={transaction.account}
          setUserData={setUserData}
          accountNames={accountNames}
          setCurrentlySelected={setCurrentlySelected}
        />

      )) }
  </Grid>
);
export default TransGrid;
