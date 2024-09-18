import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { getOrdersApi, orderBurgerApi, getOrderByNumberApi } from '@api';

export const getOrdesThunk = createAsyncThunk(
  'order/getOrders',
  async () => await getOrdersApi()
);

export const orderBurgerThunk = createAsyncThunk(
  'order/createOrder',
  async (data: string[]) => {
    const res = await orderBurgerApi(data);

    if (res) {
      return { order: res.order, name: res.name };
    }

    return Promise.reject(res);
  }
);

export const getOrderByNumberThunk = createAsyncThunk(
  'order/getOrderByNumber',
  async (number: number) => {
    const res = await getOrderByNumberApi(number);

    if (res) {
      return res.orders;
    }

    return Promise.reject(res);
  }
);

type TOrderSlice = {
  success: boolean;
  orderRequest: boolean;
  orderModalData: TOrder | null;
  orders: TOrder[];
};

const initialState: TOrderSlice = {
  success: false,
  orderRequest: false,
  orderModalData: null,
  orders: []
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset(state) {
      state.orderModalData = null;
    }
  },
  selectors: {},
  extraReducers: (builder) => {
    builder
      /* Fetch orders */
      .addCase(getOrdesThunk.pending, (state) => {})
      .addCase(getOrdesThunk.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(getOrdesThunk.rejected, (state, action) => {
        console.log('Error fetching orders:', action.error);
        state.success = false;
      })
      /* create order */
      .addCase(orderBurgerThunk.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(orderBurgerThunk.fulfilled, (state, action) => {
        state.orderModalData = action.payload.order;
        state.orderRequest = false;
      })
      .addCase(orderBurgerThunk.rejected, (state, action) => {
        console.log('Error creating order:', action.error);
        state.success = false;
        state.orderRequest = false;
      })
      /* Fetch order by number */
      .addCase(getOrderByNumberThunk.pending, (state) => {})
      .addCase(getOrderByNumberThunk.fulfilled, (state, action) => {
        state.orderModalData = action.payload[0];
      })
      .addCase(getOrderByNumberThunk.rejected, (state, action) => {
        console.log('Error fetching order by number:', action.error);
      });
  }
});

export const { reset } = orderSlice.actions;
export const {} = orderSlice.selectors;
export const reducer = orderSlice.reducer;
