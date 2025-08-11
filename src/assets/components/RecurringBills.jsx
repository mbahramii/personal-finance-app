import { IoMdArrowDropright } from "react-icons/io";

const RecurringBills= ()=>{
    return(
        <div className="bg-white h-[300px] p-4 rounded-xl mt-10">
        <div className="flex justify-between mb-5 ">
          <p className="text-black"> Recurring Bills</p>
          <div className="flex items-center text-gray">
            <p className="">see details</p>
            <h1>
              <IoMdArrowDropright />
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-3">
          <div className="flex items-center bg-[#f7f3ec] rounded-lg w-[95%] relative my-2">
            <div className="w-1.5 h-full bg-teal-700 rounded-l-md  absolute"></div>
            <div className="flex justify-between w-full items-center p-3">
              <p className="text-sm text-gray-800">Paid Bills</p>
              <p className="text-sm font-semibold text-gray-900">$190.00</p>
            </div>
          </div>
          <div className="flex items-center bg-[#f7f3ec] rounded-lg w-[95%] relative my-2">
            <div className="w-1.5 h-full bg-cyan-400 rounded-l-md  absolute"></div>
            <div className="flex justify-between w-full items-center p-3">
              <p className="text-sm text-gray-800">Total Upcoming</p>
              <p className="text-sm font-semibold text-gray-900">$190.00</p>
            </div>
          </div>
          <div className="flex items-center bg-[#f7f3ec] rounded-lg w-[95%] relative my-2">
            <div className="w-1.5 h-full bg-amber-400 rounded-l-md  absolute"></div>
            <div className="flex justify-between w-full items-center p-3">
              <p className="text-sm text-gray-800">Due Soon</p>
              <p className="text-sm font-semibold text-gray-900">$190.00</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RecurringBills;