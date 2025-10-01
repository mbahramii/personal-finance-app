import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Entertainment", value: 159, color: "#047857" },
  { id: 2, name: "Bills", value: 870, color: "#22d3ee" },
  { id: 3, name: "Dining Out", value: 1122, color: "#fbbf24" },
  { id: 4, name: "Personal Care", value: 10, color: "#808080" },
];

const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.push(action.payload);
    },
    deleteBudget: (state, action) => {
      return state.filter((b) => b.id !== action.payload);
    },
    updateBudget: (state, action) => {
      const { id, value } = action.payload;
      const budget = state.find((b) => b.id === id);
      if (budget) {
        budget.value = value;
      }
    },
  },
});

export const { addBudget, deleteBudget, updateBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;