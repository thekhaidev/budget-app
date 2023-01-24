import React from 'react';

import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Box,
} from '@mui/material';

const Topbar = ({ logout }) => {
    const todayDate = new Date().toLocaleDateString('en-US');

    return (
        <AppBar sx={{
            flexGrow: 1,
        }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {todayDate}
                </Typography>
                <Button onClick={() => logout()} color="inherit">logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
