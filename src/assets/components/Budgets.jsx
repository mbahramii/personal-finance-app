import { IoMdArrowDropright } from "react-icons/io";

const Budgets = () => {
  return (
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
      <div className="flex flex-col items-center justify-between sm:flex sm:flex-row sm:items-center sm:justify-between">
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
    </div>
  );
};

export default Budgets;
