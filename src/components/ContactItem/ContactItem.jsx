import React from 'react';
import { ListItem, Typography } from '@mui/material';

export const ContactItem = ({ name, number, id }) => {
  return (
    <ListItem>
      <Typography>
        {name}: {number}
      </Typography>
    </ListItem>
  );
};
