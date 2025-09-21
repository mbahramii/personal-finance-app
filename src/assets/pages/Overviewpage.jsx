import Pots from "../components/Pots";
import Budgets from "../components/Budgets";
import RecurringBills from "../components/RecurringBills";
import TransactionsList from "../components/TransactionsList";
import BalanceSummary from "../components/BalanceSummary";
import { useSelector } from "react-redux";

const TransactionsSection = () => {
  
   // Get transaction array from redux store
 const transactions = useSelector((state) => state.transactions);
  return <TransactionsList transactions={transactions} />;
};

const Overviewpage = () => {



  return (
    <div className="p-[10px] xl:mx-auto" >
      <div>
        <div className="mb-3 font-bold text-[20px] sm:mx-1">
          <h1>Overview</h1>
        </div>
        <BalanceSummary />
      </div>
      <div className="lg:flex lg:flex-row lg:gap-2 lg:items-start lg:justify-strart ">
      <div className="lg:flex lg:flex-col lg:justify-start">
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
