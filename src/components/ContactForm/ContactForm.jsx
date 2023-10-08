import React from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContact } from 'api/api';
import { Button, TextField, Box, Typography } from '@mui/material';
import { Form } from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handlerSubmit = (values, actions) => {
    const isDuplicate = contacts.some(contact => contact.name === values.name);

    if (isDuplicate) {
      Notify.info(`${values.name} is already in contacts`);
      actions.resetForm();
    } else {
      dispatch(addContact(values))
        .unwrap()
        .then(() => {
          actions.resetForm();
        })
        .catch(error => {
          Notify.error('An error occurred while adding the contact.');
        });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handlerSubmit}
    >
      <Form>
        <Box marginBottom={2}>
          <Typography variant="body1">Name</Typography>
          <Field
            as={TextField}
            variant="outlined"
            size="small"
            type="text"
            name="name"
          />
          <ErrorMessage component="p" name="name" />
        </Box>

        <Box marginBottom={2}>
          <Typography variant="body1">Number</Typography>
          <Field
            as={TextField}
            variant="outlined"
            size="small"
            type="tel"
            name="number"
          />
          <ErrorMessage component="p" name="number" />
        </Box>

        <Button variant="outlined" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
