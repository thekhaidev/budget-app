import React from 'react'; import {
  Drawer,
  Divider,
  Box,
  Select,
  MenuItem,
  Typography,
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

        <Typography
          variant="h4"
          sx={{
            mt: 3,
          }}
        >
          Accounts
        </Typography>

        <Typography
          variant="body2"
          fontSize="30px"
          sx={{
            mb: 1,
          }}
        >
          Select
        </Typography>

        <Select
          defaultValue="all"
          sx={{
            width: '80%',
            marginBottom: '5%',
            alignSelf: 'center',
          }}
          onChange={handleChange}
        >
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
        <Typography
          variant="h4"
        >
          Incoming
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
          }}
        >
          {transactions
            ? USDollar.format(totalCredit())
            : USDollar.format(0)}
        </Typography>
        <Typography variant="h4">
          Outgoing
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
          }}
        >
          {transactions
            ? USDollar.format(totalDebit())
            : USDollar.format(0)}
        </Typography>
        <Typography variant="h4">
          Balance
        </Typography>

        <Typography
          variant="h5"
        >
          {transactions
            ? USDollar.format(totalCredit() - totalDebit())
            : USDollar.format(0)}
        </Typography>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
