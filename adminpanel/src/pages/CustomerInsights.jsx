import React from "react";
import { Pie } from "react-chartjs-2";

const CustomerInsights = () => {
  // Mock customer data for demonstration
  const data = {
    labels: ["Men", "Women", "Kids", "Accessories"],
    datasets: [
      {
        label: "Customer Insights",
        data: [30, 25, 20, 25], // Example data, replace with actual data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="w-full h-full bg-[#f3f3f8]">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>Customer Insights</h1>
      </div>
      <div className="max-w-lg mx-auto p-4   rounded-lg md:mt-10">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default CustomerInsights;
