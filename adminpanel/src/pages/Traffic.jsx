import React, { useState } from "react";

const Traffic = () => {
  const [trafficData, setTrafficData] = useState([
    { id: 1, name: "Product 1", views: 1500, clicks: 300 },
    { id: 2, name: "Product 2", views: 1000, clicks: 200 },
  ]);

  return (
    <div className="w-full h-full bg-[#f3f3f8]">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>Traffic Report</h1>
      </div>
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg md:mt-10">
        <h2 className="text-xl font-bold mb-4">Product Traffic Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
                  Product Name
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
                  Views
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
                  Clicks
                </th>
              </tr>
            </thead>
            <tbody>
              {trafficData.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.views}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.clicks}
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

export default Traffic;
