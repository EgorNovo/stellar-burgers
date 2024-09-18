import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import { reducer as ingredientsReducer } from '../slices/ingredients';
import { reducer as authorizationReducer } from '../slices/auth';
import { reducer as feedReducer } from '../slices/feed';
import { reducer as builderReducer } from '../slices/builder';
import { reducer as orderReducer } from '../slices/order';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  authorization: authorizationReducer,
  feeds: feedReducer,
  builder: builderReducer,
  order: orderReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
