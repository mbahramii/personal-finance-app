import { useState } from "react";
import AddTransActions from "../components/addTransaction";
import Transactions from "../components/Transactions";

const Transactionspage = () => {

// State to store all transactions
const [transactions, setTransactions] = useState([])

// Add new transaction to the list
  const addTransaction=(newTransactions)=>{
    setTransactions([...transactions,newTransactions])
  }
  return(
    <div className="">
          <AddTransActions onAdd={addTransaction}/>
          <Transactions transactions={transactions}/>
    </div>
  );
};
export default Transactionspage;
