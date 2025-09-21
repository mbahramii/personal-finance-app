import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { addTransaction } from "../../store/transactionsSlice";
// Component for adding new transactions
const AddTransActions = () => {
  // Get transaction array from redux store
  const transactions = useSelector((state) => state.transactions);

  // Controls whether the form is shown or hidden
  const [showForm, setShowForm] = useState(false);
  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(true);
  };

  const dispatch = useDispatch()
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object from form values
    const transaction = {
      id: Date.now(),
      name: e.target.name.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      description: e.target.description.value,
      type: e.target.type.value,
    };

    // Add the new transaction to the global state via context
    dispatch(addTransaction(transaction));
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="p-[10px] ">
      <div>
        {!showForm && (
          <button
            className="bg-gray px-3 py-1 rounded  hover:bg-gray-300"
            onClick={toggleForm}
          >
            Add transactions
          </button>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center items-center mx-auto p-[10px] rounded-lg mt-2 space-y-2 w-[310px] sm:w-[500px]  bg-[#ffdba5] sm:gap-2"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="border p-1 sm:w-[90%] rounded-lg "
              required
            />
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="border p-1 sm:w-[90%] rounded-lg "
              required
            />
            <input
              className="rounded-lg p-1 sm:w-[90%]"
              type="date"
              name="date"
              required
            />
            <select
              name="type"
              className="border p-2 w-full rounded-lg sm:w-[90%] bg-white text-black"
              required
            >
              <option value="">Select transaction type</option>
              <option value="deposit">Deposite</option>
              <option value="withdrawal">withdrawal</option>
            </select>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="border p-1 w-full rounded-lg sm:w-[90%]"
            />
            <button
              type="submit"
              className="bg-white text-amber-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition sm:w-[90%]"
            >
              Add
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTransActions;
