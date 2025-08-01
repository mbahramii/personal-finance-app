import { MdHome } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { PiReceiptLight } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full flex gap-10 justify-center bg-neutral-600 rounded-t-xl h-[50px] items-center fixed bottom-0 text-white lg:flex-col">
      {/* <Link to="/home"> */}
      <div className="flex flex-col text-center items-center">
        <MdHome className=" w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Overview</h1>
      </div>
      {/* </Link> */}
      {/* <Link to="/transfer"> */}
      <div className="flex flex-col items-center">

        <BiTransfer className="rotate-90 w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Transaction</h1>
      </div>
      {/* </Link> */}
      {/* <Link to="/analytics"> */}
      <div className="flex flex-col items-center">

        <GrAnalytics className="w-6 h-6 text-white hover:text-blue-400 transition" />
        <h1 className="hidden sm:block ">Budgets</h1>
      </div>
      {/* </Link> */}
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
