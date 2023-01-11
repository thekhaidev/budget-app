import React from "react";

import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";

const App = () => {
  return (
    <Box style={{ border: "1px solid red" }}>
      <Container
        style={{ textAlign: "center", border: "1px solid black" }}
        fixed
      >
        <h1>Kimmy's Checkbook</h1>
        <h3>Log In</h3>
        <Box mb={2} component="form" noValidate autoComplete="off">
          <FormControl sx={{ width: "25ch" }}>
            <OutlinedInput name="email" placeholder="Email" />
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
