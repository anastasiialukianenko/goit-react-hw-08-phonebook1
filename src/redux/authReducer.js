import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
})

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = token;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
}

export const registerUser = createAsyncThunk('auth/registerUser',
  async (formData, thunkApi) => {
    try {
        const { data } = await instance.post('users/signup', formData);
      token.set(data.token);

      return data;
    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
  }
  });

  export const logInUser = createAsyncThunk('auth/logInUser',
  async (formData, thunkApi) => {
    try {
        const { data } = await instance.post('users/login', formData);

        token.set(data.token);

      return data;
    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
  }
    });
  

  export const logOutUser = createAsyncThunk('auth/logOutUser',
  async (_, thunkApi) => {
    try {
     await instance.post('users/logout');
      token.clear();

    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
  }
    });
  
    export const refreshUser = createAsyncThunk('auth/refreshUser',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.authState.token;

if(!userToken) return thunkApi.rejectWithValue("Please register first.");

      token.set(userToken);
      const { data } = await instance.get('users/current');

      return data;
    } catch(error) {
      return thunkApi.rejectWithValue(error.message);
    } 
      },
      {
        condition: (_, { getState }) => {
          const state = getState();
          const token = state.authState.token;

          if (!token) return false;
      }
    });



const initialState = {
    userData: null,
    token: null,
    isLoading: false,
    authentificated: false,
    error: null,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  extraReducers: (builder) =>
    builder
    // -----------------REGISTER--------------------
     .addCase(registerUser.fulfilled, (state, action) => { 
          state.isLoading = false;
          state.authentificated = true;
          state.userData = action.payload.user;
          state.token = action.payload.token;
      })
   // -----------------LOG IN--------------------
    .addCase(logInUser.fulfilled, (state, action) => { 
          state.isLoading = false;
          state.authentificated = true;
          state.userData = action.payload.user;
          state.token = action.payload.token;
      })
   // -----------------LOG OUT--------------------
    .addCase(logOutUser.fulfilled, (state, action) => { 
          state.isLoading = false;
          state.authentificated = false;
          state.userData = null;
          state.token = null;
      })
  // -----------------REFRESH USER--------------------
   .addCase(refreshUser.fulfilled, (state, action) => { 
          state.isLoading = false;
          state.authentificated = true;
          state.userData = action.payload;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
    )
   .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
           state.isLoading = false;
        state.error = action.payload;
        }
  )
});

// Генератори екшенів


//генерація селекторів
export const selectUserAuthentification = state => state.authState.authentificated;
export const selectUserData = state => state.authState.userData;
export const selectUserIsLoading = state => state.authState.isLoading;
export const selectUserError = state => state.authState.error;
export const selectUserToken = state => state.authState.token;


// Редюсер слайсу
export const authReducer = authSlice.reducer;