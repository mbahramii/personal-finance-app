import BudgetChart from "../components/BudgetChart";
import { useSelector} from "react-redux";

const BudgetsPage = () => {
 const budgets = useSelector((state) => state.budgets);

  return (
    // <div className="bg-white p-5 rounded-xl mt-10">
    //   <div className="flex justify-between mb-10 ">
    //     <p className="text-black">Budgets</p>
    //     <div className="flex items-center text-gray">
    //       <p className="">see details</p>
    //       <h1>
    //         <IoMdArrowDropright />
    //       </h1>
    //     </div>
    //   </div>
      <div className="flex flex-col items-center justify-between sm:flex sm:flex-row sm:items-center sm:justify-between">
        <div ><BudgetChart data={budgets}/></div>
      </div>
    // </div>
  );
};

export default BudgetsPage;
