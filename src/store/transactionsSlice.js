import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
