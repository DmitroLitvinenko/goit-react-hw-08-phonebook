import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from 'api/api';
import { Notify } from 'notiflix';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};
const handleFulfilledAddContact = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  Notify.success('Contact added successfully');
};
const handleFulfilledRemoveContact = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
  Notify.success('Contact removed successfully');
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,

    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(removeContact.fulfilled, handleFulfilledRemoveContact)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          removeContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          removeContact.rejected
        ),
        handleRejected
      );
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export default contactsSlice.reducer;
