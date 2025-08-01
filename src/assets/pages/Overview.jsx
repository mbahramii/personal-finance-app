import Pots from "../components/Pots";
import Transactions from "../components/Transactions";
import Budgets from "../components/Budgets";
import RecurringBills from "../components/RecurringBills";

const Overview = () => {
  return (
    <div className=" p-[10px]">
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
      <div className="lg:flex lg:flex-row lg:gap-10 lg:items-center lg:justify-center">
      <div className="lg:flex lg:flex-col  lg:justify-start">
        <div>
          <Pots />
        </div>
        <div>
          <Transactions />
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

export default Overview;
