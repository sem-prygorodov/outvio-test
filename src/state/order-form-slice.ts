import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderData } from "../data/client";

const initialValue: OrderData = {
  id: "",
  total: "",
  currency: "EUR",
  quantity: "",
  status: "New",
  date: "",
};

type Keys = keyof OrderData;

type PayloadType = { [key in OrderData[Keys]]: OrderData[Keys] };

const orderFormSlice = createSlice({
  name: "order-form",
  initialState: { form: initialValue },
  reducers: {
    fillOrderForm: (state, action: PayloadAction<PayloadType>) => {
      state.form = { ...state.form, ...action.payload };
    },
    resetToInitial: (state) => {
      state.form = initialValue;
    },
  },
});

export default orderFormSlice.reducer;
export const { fillOrderForm, resetToInitial } = orderFormSlice.actions;
