import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../components/contactsAPI";

export const requestContacts = createAsyncThunk('contacts/fetchAll',
  async (data, thunkApi) => {
    try {
      const contacts = await api.fetchContacts();
      return contacts;
    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
  }
  });
export const deleteContacts = createAsyncThunk('contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const newContact = await api.deleteContact(contactId);  
      return newContact;
    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

export const addContacts = createAsyncThunk('contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const newContact = await api.addContact(contact); 
      return newContact;
    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};

const appSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
      setFilterTerm(state, action) {
          state.filter = action.payload;
    },
   },
  extraReducers: (builder) =>
    builder
     .addCase(requestContacts.fulfilled, (state, action) => { 
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
  .addCase(deleteContacts.fulfilled, (state, action) => { 
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
        state.contacts.isLoading = false;
      })
   .addCase(addContacts.fulfilled, (state, action) => { 
        state.contacts.items = [action.payload, ...state.contacts.items]
        state.contacts.isLoading = false;
      })
    .addMatcher(
        action => action.type.endsWith('/pending'),
        (state) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
    )
   .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
           state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        }
  )
});

// Генератори екшенів
export const { setFilterTerm } = appSlice.actions;

//генерація селекторів
export const selectContacts = state => state.appState.contacts.items;
export const selectFilterTerm = state => state.appState.filter;
export const selectIsLoading = state => state.appState.contacts.isLoading;
export const selectError = state => state.appState.contacts.error;

// Редюсер слайсу
export const appReducer = appSlice.reducer;