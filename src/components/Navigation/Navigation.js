import React from 'react';
import { AppBar, Box, List, ListItem, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ display: 'flex', alignItems: 'flex-start' }}
      >
        <List sx={{ display: 'flex', flexDirection: 'row' }}>
          <ListItem>
            <MuiLink component={Link} to="/" color="inherit" underline="none">
              Home
            </MuiLink>
          </ListItem>

          <ListItem>
            <MuiLink
              component={Link}
              to="/contacts"
              color="inherit"
              underline="none"
            >
              Contacts
            </MuiLink>
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
};

export default Navigation;
