import React from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import DeleteButton from './common/DeleteButton.jsx';

const TransCard = ({
  amount, note, account, time, id,
}) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dateTime = new Date(time * 1000).toDateString('en-us', { timeZone: 'CST' });

  return (
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
          <Typography variant="body">
            {dateTime}
          </Typography>
          <Typography variant="h5">
            {note}
          </Typography>
          <Typography variant="body2">
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
            onClick={() => console.log(id)}
          >
            Edit
          </Button>
          <DeleteButton account={account} id={id} />
        </CardActions>

      </Card>
    </Grid>
  );
};
export default TransCard;
