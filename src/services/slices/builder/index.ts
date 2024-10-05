import { createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { v4 } from 'uuid';

type TBuilderSlice = {
  bun: TIngredient | null;
  ingredients: TConstructorIngredient[];
};

export const initialState: TBuilderSlice = {
  bun: null,
  ingredients: []
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  selectors: {
    getIngredients: (state) => state.ingredients
  },
  reducers: {
    setIngredient(state, action) {
      const payload = { ...action.payload, id: v4() };

      if (action.payload.type === 'bun') {
        state.bun = payload;
      } else {
        state.ingredients = [...state.ingredients, payload];
      }
    },
    removeIngredient(state, action) {
      state.ingredients = state.ingredients.filter(
        (item) => item.id !== action.payload
      );
    },
    resetBuilder(state) {
      state.bun = null;
      state.ingredients = [];
    },
    upIngredients(state, action) {
      let k = state.ingredients[action.payload];
      state.ingredients[action.payload] = state.ingredients[action.payload - 1];
      state.ingredients[action.payload - 1] = k;
    },
    downIngredients(state, action) {
      let k = state.ingredients[action.payload];
      state.ingredients[action.payload] = state.ingredients[action.payload + 1];
      state.ingredients[action.payload + 1] = k;
    }
  }
});

export const {
  setIngredient,
  removeIngredient,
  resetBuilder,
  upIngredients,
  downIngredients
} = builderSlice.actions;
export const { getIngredients } = builderSlice.selectors;
export const reducer = builderSlice.reducer;
