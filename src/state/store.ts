import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./order-slice";
import orderFormSlice from "./order-form-slice";

const store = configureStore({
  reducer: { orderTable: orderSlice, order: orderFormSlice },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
