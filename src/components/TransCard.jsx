import React from 'react';

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

const TransCard = ({ amount, note, account }) => {
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
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Account:
              {' '}
              {account[0].toUpperCase() + account.slice(1)}
            </Typography>
            <Typography variant="h5">
              {note}
            </Typography>
            <Typography variant="body">
              {USDollar.format(amount)}
            </Typography>
          </CardContent>
          <CardActions sx={{
            justifyContent: 'center',
          }}
          >
            <Button
              variant="outline"
              size="small"
            >
              Edit

            </Button>
            <Button
              variant="outline"
              size="small"
            >
              Delete

            </Button>
          </CardActions>

        </Card>
      </Grid>
    </Grid>
  );
};
export default TransCard;
