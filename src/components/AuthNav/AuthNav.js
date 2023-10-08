import React from 'react';
import { Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 2 }}
    >
      <Button
        component={RouterLink}
        to="/register"
        variant="outlined"
        color="primary"
      >
        Register
      </Button>
      <Button
        component={RouterLink}
        to="/login"
        variant="outlined"
        color="primary"
      >
        Log In
      </Button>
    </Container>
  );
};

export default AuthNav;
