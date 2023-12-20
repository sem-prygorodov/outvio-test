import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./order-slice";

const store = configureStore({
  reducer: orderSlice,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
