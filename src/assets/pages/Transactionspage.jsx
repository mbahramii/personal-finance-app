import { useState } from "react";
import TransactionsList from "../components/TransactionsList";
import { useTransactions } from "../components/TransactionsProvider";
import AddTransActions from "../components/addTransaction";

const Transactionspage = () => {


  // Get transactions data (list of transactions) and addTransaction function from the Context
  const { transactions, addTransaction } = useTransactions();
  return (
    <div className=" w-[100%] flex flex-col">
      <AddTransActions />
      <TransactionsList />
    </div>
  );
};
export default Transactionspage;
