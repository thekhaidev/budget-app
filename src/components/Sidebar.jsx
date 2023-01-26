import React, { useEffect } from 'react'; import {
  Drawer,
  Divider,
  Box,
  Select,
  MenuItem,
} from '@mui/material';

const Sidebar = ({ userData, select }) => {
  const accountNames = Object.keys(userData);

  const handleChange = (e) => {
    select(e.target.value);
  };

  return (
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
        <Select
          defaultValue="all"
          sx={{ width: '80%', marginBottom: '5%', alignSelf: 'center' }}
          onChange={handleChange}
        >
          {/* <MenuItem value="all">All</MenuItem> */}
          {/* <MenuItem value="checking">Checking</MenuItem>
          <MenuItem value="saving">Saving</MenuItem> */}
          {accountNames.map((account) => (
            <MenuItem
              key={account}
              value={account}
            >
              {account[0].toUpperCase() + account.slice(1)}
            </MenuItem>
          ))}

        </Select>
        <Divider variant="middle" />
        <h2>Incoming</h2>
        $23,000,000
        <h2>Outgoing</h2>
        $1
        <h2>Balance</h2>
        $22,999,999
      </Drawer>
    </Box>
  );
};

export default Sidebar;
