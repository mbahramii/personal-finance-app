import { IoMdArrowDropright } from "react-icons/io";

const Transactions = ({ transactions }) => {
  return (
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
{/* Transaction list */}
      {transactions.map((tx, index) => (
        <div key={index} className=" p-4 flex justify-between">
          <h1>{tx.name}</h1>
          <div>
            <h1
              className={`font-semibold ${
                tx.type === "deposit" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              ${tx.amount}
            </h1>
            <h1>{tx.date}</h1>
          </div>
          {/* <hr className="bg-gray w-full" /> */}
        </div>
      ))}
    </div>
  );
};
export default Transactions;
