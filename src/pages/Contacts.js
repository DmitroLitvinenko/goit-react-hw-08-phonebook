import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'api/api';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container, Box } from '@mui/material';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <div>{isLoading && 'Request in progress...'}</div>

        <ContactForm />

        <Filter />
        <ContactList />
      </Box>
    </Container>
  );
};

export default Contacts;
