import React from 'react'; import {
  Drawer,
  Divider,
  Box,
  Select,
  MenuItem,
} from '@mui/material';

import AddAccountButton from './common/AddAccountButton.jsx';

const Sidebar = ({
  accountNames,
  select,
  transactions,
  setUserData,
  currentlySelected,
}) => {
  const handleChange = (e) => {
    select(e.target.value);
  };

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const accountValue = 'accounts';
  const sidebarAccountNames = accountNames.filter((item) => item !== accountValue);

  const totalDebit = () => transactions.reduce((acc, curr) => {
    if (curr.type === 'debit') {
      // eslint-disable-next-line no-param-reassign
      acc += parseInt(curr.amount, 10);
    }
    return acc;
  }, 0);

  const totalCredit = () => transactions.reduce((acc, curr) => {
    if (curr.type === 'credit') {
      // eslint-disable-next-line no-param-reassign
      acc += parseInt(curr.amount, 10);
    }
    return acc;
  }, 0);

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>

      <Drawer
        PaperProps={{
          sx: { width: '15%' },
        }}
        variant="permanent"
        anchor="left"
      >

        <h2>Accounts</h2>
        <h3>Select</h3>

        <Select
          defaultValue="all"
          sx={{
            width: '80%',
            marginBottom: '5%',
            alignSelf: 'center',
          }}
          onChange={handleChange}
        >
          {/* <MenuItem
            key="all"
            value="all"
            sx={{
              display: 'none',
            }}
          >
            Select

          </MenuItem>
          <MenuItem
            key="select"
            value="select"
            sx={{
              display: 'none',
            }}
          >
            Select */}
          {/* </MenuItem> */}
          {/* <MenuItem value="all">All</MenuItem> */}
          {/* <MenuItem value="checking">Checking</MenuItem>
          <MenuItem value="saving">Saving</MenuItem> */}
          {sidebarAccountNames.map((account) => (
            <MenuItem
              key={account}
              value={account}
            >
              {account[0].toUpperCase() + account.slice(1)}
            </MenuItem>
          ))}

        </Select>
        <AddAccountButton
          currentlySelected={currentlySelected}
          setUserData={setUserData}
        />

        <Divider
          variant="middle"
          sx={{
            my: 2,
          }}
        />
        <h2>Incoming</h2>
        {transactions
          ? USDollar.format(totalCredit())
          : USDollar.format(0)}
        <h2>Outgoing</h2>
        {transactions
          ? USDollar.format(totalDebit())
          : USDollar.format(0)}
        <h2>Balance</h2>
        {transactions
          ? USDollar.format(totalCredit() - totalDebit())
          : USDollar.format(0)}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
