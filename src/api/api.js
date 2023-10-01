import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://650edcdf54d18aabfe9988f2.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contact/addContact',
  async newContact => {
    const response = await axios.post(BASE_URL, newContact);
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    await axios.delete(`${BASE_URL}${contactId}`);
    return contactId;
  }
);
