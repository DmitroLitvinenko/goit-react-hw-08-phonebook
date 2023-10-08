import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h6" gutterBottom>
        Welcome, {user.name}
      </Typography>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
