import React, { useState } from "react";

const SalesReport = () => {
  const [salesData, setSalesData] = useState([
    { id: 1, name: "Product 1", unitsSold: 100, revenue: 2000 },
    { id: 2, name: "Product 2", unitsSold: 50, revenue: 1000 },
  ]);

  return (
    <div className="w-full h-full bg-[#f3f3f8]">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>Sales Report</h1>
      </div>
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg md:mt-10">
        <h2 className="text-xl font-bold mb-4">Product Sales Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
                  Product Name
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
                  Units Sold
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.unitsSold}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    ${product.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
