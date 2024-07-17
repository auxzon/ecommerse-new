import React from "react";

const AllCustomers = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 22 },
    // Add more customer data as needed
  ];

  return (
    <div className="w-full h-full bg-[#f3f3f8]  ">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>ALL Customers</h1>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border px-4 py-2">{customer.id}</td>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.email}</td>
              <td className="border px-4 py-2">{customer.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCustomers;
