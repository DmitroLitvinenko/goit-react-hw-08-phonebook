import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from 'api/api';
import { getFilter } from 'redux/filterSlice';
import { List, IconButton, Typography, Box, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <List>
        {contacts
          .filter(({ name }) => name.toLowerCase().includes(filter))
          .map(({ id, name, number }) => (
            <ListItem
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              key={id}
            >
              <Typography>
                {name}: {number}
              </Typography>
              <IconButton
                size="small"
                aria-label="delete"
                onClick={() => dispatch(removeContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};
