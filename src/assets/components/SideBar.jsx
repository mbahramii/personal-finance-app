import { MdHome } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { PiReceiptLight } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { Link ,useLocation} from "react-router-dom";

const SideBar = () => {
const location = useLocation();
const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen flex gap-10 bg-neutral-600 items-start text-white lg:flex-col p-12 pb-96">
      <Link to="/">
      <div className={`flex flex-row gap-2 items-end justify-end ${
    isActive("/") ? "text-blue-400" : "text-white hover:text-blue-400"
  }`}>
        <MdHome className=" w-6 h-6  hover:text-blue-400 transition" />
        <h1 className="">Overview</h1>
      </div>
      </Link>
      <Link to="/Transactionspage">
      <div className={`flex flex-row gap-2 items-end justify-end  ${
    isActive("/Transactionspage") ? "text-blue-400" : "text-white hover:text-blue-400"
  }`}>
        <BiTransfer className="rotate-90 w-6 h-6  hover:text-blue-400 transition" />
        <h1 className="">Transactions</h1>
      </div>
      </Link>
      {/* <Link to="/analytics"> */}
      <div className="flex flex-row gap-2 items-end justify-end">
        <GrAnalytics className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="">Budgets</h1>
      </div>
      {/* </Link> */}
      {/* <Link to="/income"> */}
      <div className="flex flex-row gap-2 items-end justify-end">
        <GrMoney className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="">Pots</h1>
      </div>
      {/* </Link> */}
      {/* <Link to="/receipts"> */}
      <div className="flex flex-row gap-2 items-end justify-end">
        <PiReceiptLight className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="">Recurring Bills</h1>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default SideBar;
