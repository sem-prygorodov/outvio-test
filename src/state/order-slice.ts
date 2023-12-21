import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderData } from "../data/client";

const initialValue: OrderData[] = [];

const orderSlice = createSlice({
  name: "order",
  initialState: { orders: initialValue },
  reducers: {
    loadOrders: (state, action: PayloadAction<OrderData[]>) => {
      state.orders = action.payload;
    },
    addNewOrder: (state, action: PayloadAction<OrderData>) => {
      state.orders = [action.payload, ...state.orders];
    },
  },
});

export default orderSlice.reducer;
export const { addNewOrder, loadOrders } = orderSlice.actions;
