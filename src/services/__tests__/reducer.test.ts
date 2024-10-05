import {
  expect,
  test,
  describe,
  jest,
  beforeEach,
  afterEach
} from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';

import store, { rootReducer } from '../store';
import {
  setIngredient,
  removeIngredient,
  resetBuilder,
  upIngredients,
  downIngredients
} from '@slices';

import {
  reducer as builderReducer,
  initialState as initialStateBuilder
} from '../slices/builder';

import {
  reducer as ingredientsReducer,
  getIngredientsThunk,
  initialState as initialStateIngredients
} from '../slices/ingredients';

import {
  getFeedsThunk,
  reducer as feedReducer,
  initialState as initialStateFeed
} from '../slices/feed';

import {
  reducerINIT,
  ingredientData,
  ingredientsData,
  ingredientsDataReplace,
  feedData
} from '../testData';

describe('Тест редьюсера и слайсов', () => {
  const storeTest = configureStore({
    reducer: rootReducer
  });

  test('Инициализация rootReducer', () => {
    expect(storeTest.getState()).toEqual(reducerINIT);
  });

  it('Правильная настройка и работа reducer. Вызов reducer с undefined и экшеном, который не обрабатывается ни одним редьюсером', () => {
    expect(rootReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      reducerINIT
    );
  });

  test('Слайс bullder. Экшн для добавления ингредиента в бургер', () => {
    const addState = builderReducer(
      initialStateBuilder,
      setIngredient(ingredientData)
    );

    expect(initialStateBuilder.ingredients.length).toBe(0);
    expect(addState.ingredients.length).toBe(1);
  });

  test('Слайс bullder. Экшн для удаления ингредиента из бургер', () => {
    const deleteState = builderReducer(
      {
        bun: null,
        ingredients: [ingredientData]
      },
      removeIngredient(ingredientData.id)
    );

    expect(deleteState.ingredients.length).toBe(0);
  });

  test('Слайс bullder. Экшн для изменения порядка ингредиентов вверх в бургере', () => {
    const replaceState = builderReducer(
      {
        bun: null,
        ingredients: [...ingredientsData]
      },
      upIngredients(1)
    );

    expect(replaceState.ingredients).toEqual(ingredientsDataReplace);
  });

  test('Слайс bullder. Экшн для изменения порядка ингредиентов вниз в бургере', () => {
    const replaceState = builderReducer(
      {
        bun: null,
        ingredients: [...ingredientsDataReplace]
      },
      downIngredients(0)
    );

    expect(replaceState.ingredients).toEqual(ingredientsData);
  });

  test('Слайс bullder. Экшн для сброса состояния бургера', () => {
    const resetState = builderReducer(
      {
        bun: null,
        ingredients: [...ingredientsData]
      },
      resetBuilder()
    );

    expect(resetState).toEqual(initialStateBuilder);
  });

  test('Слайс ingredients. Thunk - getIngredientsThunk. Fulfilled', async () => {
    const action = {
      type: getIngredientsThunk.fulfilled.type,
      payload: ingredientsData
    };

    const ingredientsState = ingredientsReducer(
      initialStateIngredients,
      action
    );

    expect(ingredientsState).toEqual({
      ingredients: ingredientsData,
      isLoading: false,
      error: {}
    });
  });

  test('Слайс ingredients. Thunk - getIngredientsThunk. Pending', async () => {
    const action = {
      type: getIngredientsThunk.pending.type,
      payload: ingredientsData
    };

    const ingredientsState = ingredientsReducer(
      initialStateIngredients,
      action
    );

    expect(ingredientsState).toEqual({
      ingredients: [],
      isLoading: true,
      error: {}
    });
  });

  test('Слайс ingredients. Thunk - getIngredientsThunk. Rejected', async () => {
    const action = {
      type: getIngredientsThunk.rejected.type,
      payload: {
        name: 'Error',
        message: 'miss fetch ingredients',
        code: '404'
      }
    };

    const ingredientsState = ingredientsReducer(
      initialStateIngredients,
      action
    );

    expect(ingredientsState).toEqual({
      ingredients: [],
      isLoading: false,
      error: {
        name: 'Error',
        message: 'miss fetch ingredients',
        code: '404'
      }
    });
  });

  test('Слайс feed. Thunk - getFeedsThunk. Fulfilled', async () => {
    const action = {
      type: getFeedsThunk.fulfilled.type,
      payload: feedData
    };

    const feedState = feedReducer(initialStateFeed, action);

    expect(feedState).toEqual({
      data: feedData,
      isLoading: false,
      error: ''
    });
  });

  test('Слайс feed. Thunk - getFeedsThunk. Pending', async () => {
    const action = {
      type: getFeedsThunk.pending.type,
      payload: []
    };

    const feedState = feedReducer(initialStateFeed, action);

    expect(feedState).toEqual({
      data: {
        orders: [],
        total: 0,
        totalToday: 0
      },
      isLoading: true,
      error: ''
    });
  });

  test('Слайс feed. Thunk - getFeedsThunk. Rejected', async () => {
    const action = {
      type: getFeedsThunk.rejected.type,
      payload: {
        name: 'Error',
        message: 'miss fetch feed list',
        code: '404'
      }
    };

    const feedState = feedReducer(initialStateFeed, action);

    expect(feedState).toEqual({
      data: {
        orders: [],
        total: 0,
        totalToday: 0
      },
      isLoading: false,
      error: {
        name: 'Error',
        message: 'miss fetch feed list',
        code: '404'
      }
    });
  });
});
