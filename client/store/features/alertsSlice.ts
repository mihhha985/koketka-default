import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface IAlertData{
	language: string;
	text: string;
	visible?: boolean;
}

const initialState = {
	language: '',
	text: '',
	visible: false,
}

export const alertSlice = createSlice({
  name: 'modals',
	initialState,
  reducers: {
		show: (state, actions:PayloadAction<IAlertData>) => {
			state.visible = true;
			state.language = actions.payload.language;
			state.text = actions.payload.text;
			document.body.style.overflow = "hidden";
		},
		hide: (state) => {
			state.visible = false;
			state.language = '';
			state.text = '';
			document.body.style.overflow = "";
		}
	}
});

export const { show, hide } = alertSlice.actions
export default alertSlice.reducer;