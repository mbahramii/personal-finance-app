import { GrMoney } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";

const Pots =()=>{
return(
    <div className="bg-white p-5 rounded-xl mt-10">
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
            <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between">
              <div className="bg-cream rounded-[10px] w-[270px]  h-[120px] p-10 lg:w-[140px]">
                <div>total saved</div>
                <GrMoney />
              </div>
              <div className="flex flex-wrap items-center  justify-end w-[250px] mt-4 ">
                <div className="min-w-[125px] flex flex-row items-center mb-5">
                  <span className="w-1 h-10 bg-emerald-700 mr-2 lg:mr-px rounded-xl"></span>
                  <div className="flex flex-col">
                    <span className="text-gray">Savings</span>
                    <span>$159</span>
                  </div>
                </div>
                <div className="min-w-[110px] flex flex-row items-center mb-5">
                  <span className="w-1 h-10 bg-sky-400 mr-2 lg:mr-px rounded-xl"></span>
                  <div className="flex flex-col">
                    <span className="text-gray">Gift</span>
                    <span>$40</span>
                  </div>
                </div>
                <div className="min-w-[125px] flex flex-row items-center mb-5">
                  <span className="w-1 h-10 bg-purple-800 mr-pmr-2 lg:mr-px rounded-xl"></span>
                  <div className="flex flex-col">
                    <span className="text-gray">Concert Ticket</span>
                    <span>$110</span>
                  </div>
                </div>
                <div className="min-w-[110px] flex flex-row items-center mb-5">
                  <span className="w-1 h-10 bg-orange-400 mr-2 lg:mr-px rounded-xl"></span>
                  <div className="flex flex-col">
                    <span className="text-gray">New laptop</span>
                    <span>$10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
)
}
export default Pots;