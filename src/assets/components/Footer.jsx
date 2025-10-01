import { MdHome } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { PiReceiptLight } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

const location = useLocation();
const isActive = (path) => location.pathname === path;

return (
    <div className="w-full flex gap-10 justify-center bg-neutral-600 rounded-t-xl h-[50px] items-center fixed bottom-0 text-white lg:flex-col">
      <Link to="/">
      <div className={`flex flex-col text-center items-center ${
    isActive("/") ? "text-blue-400" : "text-white hover:text-blue-400"
  }`}>
        <MdHome className=" w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Overview</h1>
      </div>
      </Link>
      <Link to="/Transactionspage">
      <div className={`flex flex-col items-center ${
    isActive("/") ? "text-blue-400" : "text-white hover:text-blue-400"
  }`}>
        <BiTransfer className="rotate-90 w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Transaction</h1>
      </div>
      </Link>
      <Link to="/BudgetsPage">
      <div className="flex flex-col items-center">

        <GrAnalytics className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Budgets</h1>
      </div>
      </Link>
      {/* <Link to="/income"> */}
      <div className="flex flex-col items-center">

        <GrMoney className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Pots</h1>
      </div> 
      {/* </Link> */}
      {/* <Link to="/receipts"> */}
      <div className="flex flex-col items-center">

        <PiReceiptLight className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Recurring Bills</h1>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Footer;
