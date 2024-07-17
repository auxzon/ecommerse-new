import React, { useState } from "react";

function Pending() {
  // Dummy data (replace with actual data from state or API)
  const pendingOrders = [
    {
      customerId: 3,
      customerName: "Alice Johnson",
      address: "789 Pine St, Yet Another Town, USA",
      productId: 103,
      productName: "Product 3",
      productImg: "path_to_image.jpg",
      price: "$200",
    },
    {
      customerId: 4,
      customerName: "Bob Brown",
      address: "101 Maple Rd, Different City, USA",
      productId: 104,
      productName: "Product 4",
      productImg: "path_to_image.jpg",
      price: "$250",
    },
    // Add more pending orders as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter pending orders based on search query
  const filteredOrders = pendingOrders.filter((order) =>
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto bg-[#f3f3f8] md:px-5">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>PENDING ORDER</h1>
      </div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by Customer Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.customerId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.productId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.productName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={order.productImg}
                    alt={order.productName}
                    className="w-12 h-12"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pending;
