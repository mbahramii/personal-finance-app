import { useSelector } from "react-redux";

const BalanceSummary = ()=>{
    const transactions = useSelector((state)=>state.transactions)


  const CurrentBalance = transactions.reduce((total , tx)=>{
    if (tx.type === "deposit"){
        return total + Number(tx.amount);
    }else{
        return total - Number(tx.amount)
    }
  }, 0);
  console.log(CurrentBalance)

  const income = transactions
    .filter(tx=> tx.type === "deposit")
    .reduce((acc , tx ) =>acc + Number(tx.amount) , 0 );
  console.log(income)

  const Expenses = transactions
    .filter(tx=> tx.type === "withdrawal")
    .reduce((acc , tx ) =>acc + Number(tx.amount) , 0 );
    console.log(Expenses)
  

return (
    <div className="font-bold flex flex-col sm:flex-row">
          <div className="bg-black rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
            <h1 className="text-gray ">Current Balance</h1>
            <h1 className="text-white">${CurrentBalance}</h1>
          </div>
          <div className="font-bold bg-white rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
            <h1 className="text-gray ">Income</h1>
            <h1 className="text-emerald-600">${income}</h1>
          </div>
          <div className="font-bold bg-white rounded-[10px] h-28 p-5 mb-3 sm:w-[250px] sm:mx-1">
            <h1 className="text-gray">Expenses</h1>
            <h1 className="text-red-500">${Expenses}</h1>
          </div>
        </div>
)
}
export default BalanceSummary;