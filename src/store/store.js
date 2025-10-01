import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import budgetsReducer from "./budgetsSlice";

export const store= configureStore({
    reducer: {
        transactions: transactionsReducer,
        budgets: budgetsReducer
    },
})