import { createSlice } from "@reduxjs/toolkit";

export type MailerStateType = {
  visible: boolean;
}

const initialState: MailerStateType = {
  visible: false,
};

const mailerSlice = createSlice({
  name: "mailer",
  initialState,
  reducers: {
    showMailer: (state) => {
      state.visible = true;
			document.body.style.overflow = "hidden";
    },
    hideMailer: (state) => {
      state.visible = false;
			document.body.style.overflow = "";
    },
  },
});

export const { showMailer, hideMailer } = mailerSlice.actions;
export default mailerSlice.reducer;