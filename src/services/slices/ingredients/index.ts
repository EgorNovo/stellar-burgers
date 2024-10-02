import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

import { getIngredientsApi } from '@api';

type TIngredientsState = {
  ingredients: Array<TIngredient>;
};

const initialState: TIngredientsState = {
  ingredients: []
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
    builder.addCase(getIngredientsThunk.pending, (state) => {});
    builder.addCase(getIngredientsThunk.fulfilled, (state, action) => {
      state.ingredients = action.payload;
    });
    builder.addCase(getIngredientsThunk.rejected, (state, action) => {});
  }
});

export const {} = ingredientsSlice.actions;
export const {} = ingredientsSlice.selectors;
export const reducer = ingredientsSlice.reducer;
