import {
  createSlice,
  createAsyncThunk,
  SerializedError
} from '@reduxjs/toolkit';
import { getFeedsApi } from '@api';

import { TOrdersData } from '@utils-types';

type TFeedSlice = {
  isLoading: boolean;
  error: string | SerializedError;
  data: TOrdersData;
};

export const initialState: TFeedSlice = {
  isLoading: false,
  error: '',
  data: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};

export const getFeedsThunk = createAsyncThunk(
  'feed/getAllFeed',
  async () => await getFeedsApi()
);

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  selectors: {
    /* select all orders */
    getAllOrders: (state) => state.data.orders,
    getTotalOrders: (state) => state.data.total,
    getTotalTodayOrders: (state) => state.data.totalToday
  },
  extraReducers: (builder) => {
    builder
      /* fetch all feeds */
      .addCase(getFeedsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedsThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getFeedsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as SerializedError;
      });
  }
});

export const {} = feedSlice.actions;
export const { getAllOrders, getTotalOrders, getTotalTodayOrders } =
  feedSlice.selectors;
export const reducer = feedSlice.reducer;
