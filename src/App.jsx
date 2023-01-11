import React from 'react';

import {
  Container,
  Box,
} from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './components/Form.jsx';

function App() {
  return (
    <Router>
      <Box style={{ border: '1px solid red' }}>
        <Container
          style={{ textAlign: 'center', border: '1px solid black' }}
          fixed
        >
          <h1>Kimmy&apos;s Checkbook</h1>
          <Form />
        </Container>

      </Box>
    </Router>
  );
}

export default App;
