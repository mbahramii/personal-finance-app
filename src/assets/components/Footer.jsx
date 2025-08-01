import { MdHome } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { PiReceiptLight } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full flex gap-10 justify-center bg-neutral-600 rounded-t-xl h-[50px] items-center fixed bottom-0">
      {/* <Link to="/home"> */}
        <MdHome className="w-6 h-6 text-white hover:text-blue-400 transition" />
      {/* </Link> */}
      {/* <Link to="/transfer"> */}
        <BiTransfer className="rotate-90 w-6 h-6 text-white hover:text-blue-400 transition" />
      {/* </Link> */}
      {/* <Link to="/analytics"> */}
        <GrAnalytics className="w-6 h-6 text-white hover:text-blue-400 transition" />
      {/* </Link> */}
      {/* <Link to="/income"> */}
        <GrMoney className="w-6 h-6 text-white hover:text-blue-400 transition" />
      {/* </Link> */}
      {/* <Link to="/receipts"> */}
        <PiReceiptLight className="w-6 h-6 text-white hover:text-blue-400 transition" />
      {/* </Link> */}
    </div>
  );
};

export default Footer;
