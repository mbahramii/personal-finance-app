import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const BudgetChart = ({ data=[]}) => {
  const totalSpent = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-4 min-w-[300px]  rounded-xl flex flex-col sm:flex-row sm:items-center ">
      <div className=" w-[300px] flex justify-center items-center m-auto">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute flex flex-col items-center">
          <span className="text-2xl font-bold">${totalSpent}</span>
          {/* <span className="text-sm text-gray-500">of ${limit} limit</span> */}
        </div>
      </div>

      <div className="mt-4 w-[320px] flex flex-wrap gap-3">
        {data.map((item, index) => (
          <div key={index} className="min-w-[100px] flex justify-center items-center space-x-1">
            <div
              className="w-1 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600 text-sm">{item.name}</span>
            <span className="ml-auto font-medium">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div> 
    </div>
  );
};
export default BudgetChart;
