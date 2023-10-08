import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { TextField, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box marginY={2}>
      <TextField
        label="Find contacts by name"
        variant="outlined"
        size="small"
        onChange={evt =>
          dispatch(filterContact(evt.target.value.toLowerCase()))
        }
      />
    </Box>
  );
};
