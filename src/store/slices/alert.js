import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alertButton",
  initialState: {
    alertW: "",
  },

  reducers: {
    pressButton: (state, { payload }) => {
      state.alertW = payload.text;
      alert(state.alertW);
    },
  },
});

export const { pressButton } = alertSlice.actions;

export default alertSlice.reducer;
