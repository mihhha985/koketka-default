import { createSlice } from "@reduxjs/toolkit";

export type PaymentStateType = {
  visible: boolean;
};

const initialState: PaymentStateType = {
  visible: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    showPayment: (state) => {
      state.visible = true;
			document.body.style.overflow = "hidden";
    },
    hidePayment: (state) => {
      state.visible = false;
			document.body.style.overflow = "";
    },
  },
});

export const { showPayment, hidePayment } = paymentSlice.actions;
export default paymentSlice.reducer;