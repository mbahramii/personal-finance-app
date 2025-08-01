import { IoMdArrowDropright } from "react-icons/io";

const Transactions=()=>{

return(

    <div className="bg-white p-5 rounded-xl mt-10">
            <div className="flex justify-between  ">
              <p>Transactions</p>
              <div className="flex items-center text-gray">
                <h1>View All </h1>
                <h1>
                  <IoMdArrowDropright />
                </h1>
              </div>
            </div>
            <div className=" p-4 flex justify-between">
              <h1>Emma Richardson</h1>
              <div>
                <h1 className="text-emerald-700">+$75.50</h1>
                <h1>19 Aug 2024</h1>
              </div>
            </div>
            <div className=" p-4 flex justify-between">
              <h1>Emma Richardson</h1>
              <div>
                <h1 className="text-emerald-700">+$75.50</h1>
                <h1>19 Aug 2024</h1>
              </div>
            </div>
            <div className=" p-4 flex justify-between">
              <h1>Emma Richardson</h1>
              <div>
                <h1 className="text-emerald-700">+$75.50</h1>
                <h1>19 Aug 2024</h1>
              </div>
            </div>
            <hr className="bg-gray w-full" />
          </div>
)
}
export default Transactions;