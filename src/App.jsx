import React from 'react';

import {
  Container,
  Box,
} from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Form from './components/Form.jsx';

const App = () => (
  <Router>
    <Box style={{ border: '1px solid red' }}>
      <Container
        style={{ textAlign: 'center', border: '1px solid black' }}
        fixed
      >
        <h1>Kimmy&apos;s Checkbook</h1>
        <Routes>
          <Route path="/login" element={<Form title="Log In" />} />
          <Route path="/register" element={<Form title="Register" />} />
        </Routes>
      </Container>

    </Box>
  </Router>
);

export default App;
