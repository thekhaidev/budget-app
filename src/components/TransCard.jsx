import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Slide,
  useTheme,
} from '@mui/material';
import DeleteButton from './common/DeleteButton.jsx';

const TransCard = ({
  amount,
  note,
  account,
  time,
  id,
  type,
  setUserData,
  setCurrentlySelected,
}) => {
  const [slide, setSlide] = useState(false);
  const [mainCard, setMainCard] = useState(true);
  const theme = useTheme();

  const handleSlide = () => {
    setSlide(!slide);
    setMainCard(!mainCard);
  };
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
    >
      <Slide
        direction="up"
        in={mainCard}
        mountOnEnter
        unmountOnExit
      >

        <Card
          position="relative"
          sx={{
            mr: 2,
            border: '1px solid black',
            height: { md: '100%', lg: '100%' },
          }}
        >
          <CardContent>
            <Typography variant="h4">
              {note}
            </Typography>
            {type === 'credit'
              ? (
                <Typography variant="h4">
                  +
                  {USDollar.format(amount)}
                </Typography>
              )
              : (
                <Typography variant="h4">
                  {USDollar.format(amount * -1)}
                </Typography>
              )}
          </CardContent>
          <CardActions sx={{
            justifyContent: 'center',
            border: '1px solid black',
            mt: 5,
            backgroundColor: theme.palette.primary.main,
          }}
          >
            <Button
              variant="outline"
              size="small"
              onClick={handleSlide}
              sx={{
                color: theme.palette.secondary.main,
              }}
            >
              Details
            </Button>
            <DeleteButton
              account={account}
              id={id}
              setUserData={setUserData}
              setCurrentlySelected={setCurrentlySelected}
            />
          </CardActions>
        </Card>
      </Slide>
      <Slide
        direction="down"
        in={slide}
        mountOnEnter
        unmountOnExit
      >

        <Card
          position="relative"
          sx={{
            mr: 2,
            border: '1px solid black',
            height: { md: '100%', lg: '100%' },

          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              variant="h4"
              gutterBottom
            >
              Account:
              {' '}
              {account[0].toUpperCase() + account.slice(1)}
            </Typography>
            <Typography variant="h4">
              {dateTime}
            </Typography>
            <Typography variant="h4">
              {type[0].toUpperCase() + type.slice(1)}
            </Typography>

          </CardContent>
          <CardActions
            sx={{
              justifyContent: 'center',
              border: '1px solid black',
              bottom: '0px',
              left: '0px',
              mt: 2,
              backgroundColor: theme.palette.primary.main,
            }}
            position="absolute"

          >
            <Button
              variant="outline"
              size="small"
              onClick={handleSlide}
              sx={{
                color: theme.palette.secondary.main,
              }}
            >
              Details
            </Button>
            <DeleteButton
              account={account}
              id={id}
              setUserData={setUserData}
              setCurrentlySelected={setCurrentlySelected}
            />
          </CardActions>
        </Card>
      </Slide>
    </Grid>

  );
};
export default TransCard;
