import React from 'react'; import {
  Drawer,
  Divider,
  Box,
} from '@mui/material';

const Sidebar = () => (

  <Box sx={{ display: { xs: 'none' } }}>
    <Drawer
      PaperProps={{
        sx: { width: '15%' },
        boxSizing: 'border-box',
      }}
      variant="permanent"
      anchor="left"
    >
      <h2>Incoming</h2>
      <h2>Outgoing</h2>
      <Divider />

      <Divider />
      <h2>Accounts</h2>
    </Drawer>
  </Box>

);

export default Sidebar;
