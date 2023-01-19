import React from 'react'; import {
  Drawer,
  Divider,
  Box,
  Select,
  MenuItem,
} from '@mui/material';

const Sidebar = () => (

  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
    <Drawer
      PaperProps={{
        sx: { width: '15%' },
        boxSizing: 'border-box',
      }}
      variant="permanent"
      anchor="left"
    >

      <h2>Accounts</h2>
      <Select sx={{ width: '80%', alignSelf: 'center' }}>
        <MenuItem>Checking</MenuItem>
        <MenuItem>Saving</MenuItem>
      </Select>
      <Divider />
      <h2>Incoming</h2>
      $23,000,000
      <h2>Outgoing</h2>
      $1
      <h2>Balance</h2>
      $22,999,999

    </Drawer>
  </Box>

);

export default Sidebar;
