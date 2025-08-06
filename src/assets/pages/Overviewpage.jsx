import Pots from "../components/Pots";
import Budgets from "../components/Budgets";
import RecurringBills from "../components/RecurringBills";
import TransactionsList from "../components/TransactionsList";
import {TransactionsProvider , useTransactions } from "../components/TransactionsProvider";


const TransactionsSection = () => {
  
  // Get transactions from context
  const { transactions } = useTransactions();

  return <TransactionsList transactions={transactions} />;
};

const Overviewpage = () => {



  return (
    <div className="p-[10px] mx-2">
      <div>
        <div className="mb-3 font-bold text-[20px] sm:mx-1">
          <h1>Overview</h1>
        </div>
        <div className="font-bold flex flex-col sm:flex-row">
          <div className="bg-black rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
            <h1 className="text-gray ">Current Balance</h1>
            <h1 className="text-white">$4.836.00</h1>
          </div>
          <div className="font-bold bg-white rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
            <h1 className="text-gray ">Income</h1>
            <h1>$3.814.25</h1>
          </div>
          <div className="font-bold bg-white rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
            <h1 className="text-gray">Expenses</h1>
            <h1>$1.700.50</h1>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-2 lg:items-center lg:justify-center xl:justify-around">
      <div className="lg:flex lg:flex-col  lg:justify-start">
        <div>
          <Pots />
        </div>
        <div>
          <TransactionsList />
        </div>
      </div>

      <div className="lg:flex lg:flex-col lg:justify-start">
        <div>
          <Budgets />
        </div>
        <div>
          <RecurringBills />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Overviewpage;
