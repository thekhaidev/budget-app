import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Slide,
} from '@mui/material';
import { ThemeConsumer } from 'styled-components';
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

  const handleSlide = () => {
    setSlide(!slide);
    setMainCard(!mainCard);
  };
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dateTime = new Date(time * 1000).toDateString('en-us', { timeZone: 'CST' });

  // if (slide) {
  //   return (
  //     <Slide
  //       direction="right"
  //       in={slide}
  //     >
  //       <Grid
  //         item
  //         xs={12}
  //         md={4}
  //       >

  //         <Card
  //           sx={{
  //             mr: 2,
  //             border: '1px solid black',
  //           }}
  //         >
  //           <CardContent>
  //             <h1>Test</h1>

  //           </CardContent>
  //           <CardActions sx={{
  //             justifyContent: 'center',
  //           }}
  //           >
  //             <Button
  //               variant="outline"
  //               size="small"
  //               onClick={handleSlide}
  //             >
  //               Details
  //             </Button>
  //             <DeleteButton
  //               account={account}
  //               id={id}
  //               setUserData={setUserData}
  //               setCurrentlySelected={setCurrentlySelected}
  //             />
  //           </CardActions>
  //         </Card>
  //       </Grid>
  //     </Slide>
  //   );
  // }

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
            height: '22vh',
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              variant="h5"
              gutterBottom
            >
              Account:
              {' '}
              {account[0].toUpperCase() + account.slice(1)}
            </Typography>
            <Typography variant="body2">
              {type}
            </Typography>
            <Typography variant="body2">
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
            border: '1px solid black',
            mt: 1,

          }}
          >
            <Button
              variant="outline"
              size="small"
              onClick={handleSlide}
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
            height: '22vh',

          }}
        >
          <CardContent>
            <h1>Test</h1>

          </CardContent>
          <CardActions
            sx={{
              justifyContent: 'center',
              border: '1px solid black',
              bottom: '0px',
              left: '0px',
              mt: 6,
            }}
            position="absolute"

          >
            <Button
              variant="outline"
              size="small"
              onClick={handleSlide}
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
