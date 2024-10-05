import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  TRegisterData,
  TLoginData,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  updateUserApi
} from '@api';
import { setTokens, removeTokens } from '@utils-auth';
import { TUser } from '@utils-types';

export const fetchUserThunk = createAsyncThunk('user/fetchUser', async () =>
  getUserApi()
);

export const loginUserThunk = createAsyncThunk(
  'user/loginUser',
  async (data: TLoginData) => {
    const res = await loginUserApi(data);

    if (res.success) {
      setTokens(res.accessToken, res.refreshToken);
      return res.user;
    }

    return Promise.reject(res);
  }
);

export const logoutUserThunk = createAsyncThunk('user/logoutUser', async () =>
  logoutApi()
);

export const registerUserThunk = createAsyncThunk(
  'user/registerUser',
  async (data: TRegisterData) => {
    const res = await registerUserApi(data);

    if (res.success) {
      setTokens(res.accessToken, res.refreshToken);
      return res.user;
    }

    return Promise.reject(res);
  }
);

export const updateUserThunk = createAsyncThunk(
  'user/updateUser',
  async (data: TRegisterData) => {
    const res = await updateUserApi(data);

    if (res) {
      return res.user;
    }

    return Promise.reject(res);
  }
);

type TUserSlice = {
  user: TUser;
  isAuthenticated: boolean;
  isAuthorized: boolean;
};

export const initialState: TUserSlice = {
  user: {
    name: '',
    email: ''
  },
  isAuthenticated: false,
  isAuthorized: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  selectors: {
    getIsAuthChecked: (state) => state.isAuthenticated,
    getUserSelector: (state) => state.user.name
  },
  extraReducers: (builder) => {
    builder
      /*fetch user*/
      .addCase(fetchUserThunk.pending, (state) => {})
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isAuthorized = true;

        state.user = action.payload.user;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        console.log('Error fetching user:', action.error);
        state.isAuthorized = true;
      })
      /*login user*/
      .addCase(loginUserThunk.pending, (state) => {})
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        console.log('Error logging in:', action.error);
      })
      /*logout user*/
      .addCase(logoutUserThunk.pending, (state) => {})
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.isAuthenticated = false;

        state.user = {
          name: '',
          email: ''
        };

        if (global.localStorage) removeTokens();
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        console.log('Error logging out:', action.error);
      })
      /*register user*/
      .addCase(registerUserThunk.pending, (state) => {})
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        console.log('Error registering:', action.error);
      })
      /* update user */
      .addCase(updateUserThunk.pending, (state) => {})
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        console.log('Error updating user:', action.error);
      });
  }
});

export const {} = authSlice.actions;
export const { getIsAuthChecked, getUserSelector } = authSlice.selectors;
export const reducer = authSlice.reducer;
