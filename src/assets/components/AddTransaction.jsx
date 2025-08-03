import { useState } from "react";


// Component for adding new transactions
const AddTransActions = ({ onAdd }) => {

  // Controls whether the form is shown or hidden
  const [showForm, setShowForm] = useState(false);
  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(true);
  };


   // Handle form submission
  const addTransaction = (e) => {
    e.preventDefault();

    // Create a new transaction object from form values
    const transaction = {
      name: e.target.name.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      description: e.target.description.value,
      type: e.target.type.value,
    };

    onAdd(transaction);
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="p-[10px] ">
      <div>
        {!showForm && (
          <button
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            onClick={toggleForm}
          >
            +
          </button>
        )}

        {showForm && (
          <form
            onSubmit={addTransaction}
            className="flex flex-col justify-center  p-[10px] rounded-lg mt-2 space-y-2 bg-[#ffdba5] sm:flex-row  sm:gap-2"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="border p-1 sm:w-[100px] rounded-lg "
              required
            />
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="border p-1 sm:w-[100px] rounded-lg "
              required
            />
            <input
              className="rounded-lg p-1 sm:w-[100px]"
              type="date"
              name="date"
              required
            />
            <select
              name="type"
              className="border p-2 w-full rounded-lg sm:w-[100px] bg-white text-black"
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
              className="border p-1 w-full rounded-lg sm:w-[100px]" 
              required
            />
            <button
              type="submit"
              className="bg-white text-amber-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition sm:w-[100px]"
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
