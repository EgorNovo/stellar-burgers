import {
  createSlice,
  createAsyncThunk,
  SerializedError
} from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

import { getIngredientsApi } from '@api';

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  isLoading: boolean;
  error: SerializedError;
};

export const initialState: TIngredientsState = {
  ingredients: [],
  isLoading: false,
  error: {}
};

export const getIngredientsThunk = createAsyncThunk(
  'ingredients/getAll',
  async () => getIngredientsApi()
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {},
  extraReducers: (builder) => {
    builder.addCase(getIngredientsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getIngredientsThunk.fulfilled, (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getIngredientsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as SerializedError;
    });
  }
});

export const {} = ingredientsSlice.actions;
export const {} = ingredientsSlice.selectors;
export const reducer = ingredientsSlice.reducer;
