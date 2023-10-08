import React from 'react';
import { ListItem, Typography } from '@mui/material';

export const ContactItem = ({ name, number, id }) => {
  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Typography>
          {name}: {number}
        </Typography>
      </Box>
    </ListItem>
  );
};
