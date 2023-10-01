import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List, ListContainer } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useEffect } from 'react';
import { fetchContacts, removeContact } from 'api/api';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListContainer>
      <List>
        {contacts
          .filter(({ name }) => name.toLowerCase().includes(filter))
          .map(({ id, name, number }) => (
            <ContactContainer key={id}>
              <ContactItem name={name} number={number} />
              <Button type="button" onClick={() => dispatch(removeContact(id))}>
                Delete
              </Button>
            </ContactContainer>
          ))}
      </List>
    </ListContainer>
  );
};
