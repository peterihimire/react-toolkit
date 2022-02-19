import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertW: false,
};

const alertSlice = createSlice({
  name: "alertSlice",
  initialState,
  reducers: {
    handleAlert: (state, { payload }) => {
      state.alertW = payload;
    },
  },
});

export const { handleAlert } = alertSlice.actions;

export default alertSlice.reducer;
