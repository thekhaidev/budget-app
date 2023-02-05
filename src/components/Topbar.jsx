import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Switch,

} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Topbar = ({
  logout,
  setDarkMode,
  darkMode,
}) => {
  const todayDate = new Date().toLocaleDateString('en-US');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar
      sx={{
        flexGrow: 1,
        width: { sx: '100%', md: '84.8%' },
      }}
      color="primary"
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
        {/* <Button onClick={() => logout()} color="inherit">logout</Button> */}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem>
            Dark Mode

          </MenuItem>
          <MenuItem>
            <Switch
              checked={darkMode}
              onChange={selectDarkMode}
            />
            {' '}
          </MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>

        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
