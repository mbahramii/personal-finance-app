import { useState } from "react";
import TransactionsList from "../components/TransactionsList";
import AddTransActions from "../components/AddTransaction.jsx";
import BalanceSummary from "../components/BalanceSummary";

const Transactionspage = () => {


  // Get transactions data (list of transactions) and addTransaction function from the Context
  return (
    <div className=" w-[100%] flex flex-col pt-2">
      <BalanceSummary /> 
      <AddTransActions />
      <TransactionsList />
    </div>
  );
};
export default Transactionspage;
