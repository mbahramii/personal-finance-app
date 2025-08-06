import React, { createContext, useReducer, useContext } from "react";


// Create a context to hold transactions data and actions
const TransactionsContext = createContext();

const initialState = [];
// Reducer function to manage transactions state based on action types

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    default:
      return state;
  }
}

export const TransactionsProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

// Reducer function to manage transactions state based on action types
export const useTransactions = () => useContext(TransactionsContext);
