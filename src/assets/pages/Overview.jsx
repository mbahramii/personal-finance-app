import { GrMoney } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";

const Overview = () => {
  return (
    <div className=" p-[10px]">
      <div className="mb-3 font-bold text-[20px] sm:mx-1">
        <h1>Overview</h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="bg-black rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
          <h1 className="text-gray ">Current Balance</h1>
          {/* <h1>{CurrentBalance}</h1> */}
        </div>
        <div className="bg-white rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
          <h1 className="text-gray ">Income</h1>
          {/* <h1>{Income}</h1> */}
        </div>
        <div className="bg-white rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
          <h1 className="text-gray">Expenses</h1>
          {/* <h1>{Expenses}</h1> */}
        </div>
      </div>
      <div className="bg-white h-[300px] p-5 rounded-xl">
        <div className="flex justify-between ">
          <p className="text-black">Pots</p>
          <div className="flex items-center text-gray">
            <p className="">see details</p>
            <h1>
              {" "}
              <IoMdArrowDropright />
            </h1>
          </div>
        </div>
        <div>
          <div className="bg-cream rounded-[10px] h-[120px] p-10">
            <div>total saved</div>
            <GrMoney />
          </div>
          <div className="flex flex-wrap items-center  justify-center w-[300px] mt-4 ">
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-emerald-700 mr-2 rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Savings</span>
                <span>$159</span>
              </div>
            </div>
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-sky-400 mr-2  rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Gift</span>
                <span>$40</span>
              </div>
            </div>
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-purple-800 mr-2 rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Concert Ticket</span>
                <span>$110</span>
              </div>
            </div>
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-orange-400 mr-2 rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">New laptop</span>
                <span>$10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-xl mt-10">
        <div className="flex justify-between  ">
          <p>Transactions</p>
          <div className="flex items-center text-gray">
            <h1>View All </h1>
            <h1>
              {" "}
              <IoMdArrowDropright />
            </h1>
          </div>
        </div>
        <div className="w-[280px] p-4">
          Lorem ipsum dolor sit amet consectetur.
          <hr className="bg-gray w-full" />
        </div>
        <div className="w-[280px] p-4">
          Lorem ipsum dolor sit amet consectetur.
          <hr className="bg-gray w-full" />
        </div>
      </div>
      <div className="bg-white h-[300px] p-5 rounded-xl mt-10">
        <div className="flex justify-between mb-10 ">
          <p className="text-black">Budgets</p>
          <div className="flex items-center text-gray">
            <p className="">see details</p>
            <h1>
              <IoMdArrowDropright />
            </h1>
          </div>
        </div>
        <div>CHART</div>
        <div>
          <div className="flex flex-wrap items-center  justify-center w-[300px] mt-4 ">
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-emerald-700 mr-2 rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Entertainment</span>
                <span>$159</span>
              </div>
            </div>
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-cyan-400 mr-2  rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Bills</span>
                <span>$40</span>
              </div>
            </div>
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-amber-400 mr-2 rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Dining Out</span>
                <span>$110</span>
              </div>
            </div>
            <div className="min-w-[130px] flex flex-row items-center mb-5">
              <span className="w-1 h-10 bg-gray mr-2 rounded-xl"></span>
              <div className="flex flex-col">
                <span className="text-gray">Personal Care</span>
                <span>$10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[300px] p-5 rounded-xl mt-10">
        <div className="flex justify-between mb-10 ">
          <p className="text-black"> Recurring Bills</p>
          <div className="flex items-center text-gray">
            <p className="">see details</p>
            <h1>
              {" "}
              <IoMdArrowDropright />
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-14">
        <div className="flex items-center bg-[#f7f3ec] rounded-lg w-[270px] relative my-4">
          <div className="w-1.5 h-full bg-teal-700 rounded-l-md  absolute"></div>
          <div className="flex justify-between w-full items-center p-3">
            <p className="text-sm text-gray-800">Paid Bills</p>
            <p className="text-sm font-semibold text-gray-900">$190.00</p>
          </div>
        </div>
        <div className="flex items-center bg-[#f7f3ec] rounded-lg w-[270px] relative my-4">
          <div className="w-1.5 h-full bg-cyan-400 rounded-l-md  absolute"></div>
          <div className="flex justify-between w-full items-center p-3">
            <p className="text-sm text-gray-800">Total Upcoming</p>
            <p className="text-sm font-semibold text-gray-900">$190.00</p>
          </div>
        </div>
        <div className="flex items-center bg-[#f7f3ec] rounded-lg w-[270px] relative my-4">
          <div className="w-1.5 h-full bg-amber-400 rounded-l-md  absolute"></div>
          <div className="flex justify-between w-full items-center p-3">
            <p className="text-sm text-gray-800">Due Soon</p>
            <p className="text-sm font-semibold text-gray-900">$190.00</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
