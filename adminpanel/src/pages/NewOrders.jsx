import React, { useState } from "react";

function NewOrders() {
  // Dummy data (replace with actual data from state or API)
  const initialOrders = [
    {
      customerId: 1,
      customerName: "John Doe",
      address: "123 Main St, Anytown, USA",
      productId: 101,
      productName: "Product 1",
      productImg: "path_to_image.jpg",
      price: "$100",
      status: "Not Completed",
    },
    {
      customerId: 2,
      customerName: "Jane Smith",
      address: "456 Oak Ave, Another City, USA",
      productId: 102,
      productName: "Product 2",
      productImg: "path_to_image.jpg",
      price: "$150",
      status: "Not Completed",
    },
    // Add more orders as needed
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the print action
  const handlePrint = () => {
    window.print();
  };

  // Function to handle status change
  const handleStatusChange = (index, status) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = status;
    setOrders(updatedOrders);
  };

  // Filter orders based on search query
  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto bg-[#f3f3f8] md:px-5">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>NEW ORDER</h1>
      </div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by Customer Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Print
        </button>
      </div>
      <div className="overflow-x-auto bg-[f3f3f8]">
        <table className="w-full table-auto bg-white border border-gray-200">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
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
                <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleStatusChange(index, "Not Completed")}
                    className={`px-2 py-1 rounded ${
                      order.status === "Not Completed"
                        ? "bg-red-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    Not Completed
                  </button>
                  <button
                    onClick={() => handleStatusChange(index, "Pending")}
                    className={`ml-2 px-2 py-1 rounded ${
                      order.status === "Pending"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleStatusChange(index, "Completed")}
                    className={`ml-2 px-2 py-1 rounded ${
                      order.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewOrders;
