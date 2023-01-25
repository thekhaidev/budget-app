import React from 'react';

import {
  Grid,
  Card,
} from '@mui/material';

const TransCard = ({ amount, note }) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          border: '1px solid black',
        }}
      >
        <Card>
          <h1>{note}</h1>
          <h3>{USDollar.format(amount)}</h3>
        </Card>
      </Grid>
    </Grid>
  );
};
export default TransCard;
