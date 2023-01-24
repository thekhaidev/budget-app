import React from 'react';

import {
  AppBar,
  Button,
  Toolbar,
  Typography,

} from '@mui/material';

const Topbar = ({ logout }) => {
  const todayDate = new Date().toLocaleDateString('en-US');

  return (
    <AppBar
      sx={{
        flexGrow: 1,
        width: { sx: '100%', md: '84.8%' },
        backgroundColor: { xs: 'red', md: 'green' },
      }}
      color="transparent"
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'left',
          }}
        >
          {todayDate}
        </Typography>
        <Button onClick={() => logout()} color="inherit">logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
