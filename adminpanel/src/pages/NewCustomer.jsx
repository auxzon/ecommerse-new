import React, { useState } from "react";

const NewCustomer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 22 },
    // Add more customer data as needed
  ]);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const sortedCustomers = [...customers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredCustomers = sortedCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.age.toString().includes(searchQuery)
  );

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.age) {
      setCustomers([
        ...customers,
        {
          id: customers.length + 1,
          ...newCustomer,
          age: parseInt(newCustomer.age, 10),
        },
      ]);
      setNewCustomer({ name: "", email: "", age: "" });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full h-full bg-[#f3f3f8]  ">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>New Customer</h1>
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={newCustomer.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="email"
          value={newCustomer.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="border px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="age"
          value={newCustomer.age}
          onChange={handleInputChange}
          placeholder="Age"
          className="border px-4 py-2 mr-2"
        />
        <button
          onClick={handleAddCustomer}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Customer
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className="border px-4 py-2"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th
              onClick={() => requestSort("id")}
              className="px-4 py-2 cursor-pointer"
            >
              ID
            </th>
            <th
              onClick={() => requestSort("name")}
              className="px-4 py-2 cursor-pointer"
            >
              Name
            </th>
            <th
              onClick={() => requestSort("email")}
              className="px-4 py-2 cursor-pointer"
            >
              Email
            </th>
            <th
              onClick={() => requestSort("age")}
              className="px-4 py-2 cursor-pointer"
            >
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
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

export default NewCustomer;
