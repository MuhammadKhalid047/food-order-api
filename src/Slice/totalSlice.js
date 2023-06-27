import { createSlice } from "@reduxjs/toolkit";

const totalSlice = createSlice({
  name: 'totalAmount',
  initialState: {TotalPrice: 0},
  reducers: {
    totalamount: (state, action) => {
      state.TotalPrice = action.payload;
    },
  },
});

export const { totalamount } = totalSlice.actions;

export default totalSlice.reducer;
