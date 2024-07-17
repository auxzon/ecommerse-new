import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "Supplier 1", contact: "123-456-7890" },
    { id: 2, name: "Supplier 2", contact: "987-654-3210" },
  ]);
  const [supplierName, setSupplierName] = useState("");
  const [supplierContact, setSupplierContact] = useState("");

  const handleAddSupplier = (e) => {
    e.preventDefault();
    const newSupplier = {
      id: suppliers.length + 1,
      name: supplierName,
      contact: supplierContact,
    };
    setSuppliers([...suppliers, newSupplier]);
    setSupplierName("");
    setSupplierContact("");
  };

  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
  };

  return (
    <div className="w-full h-full bg-[#f3f3f8]">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>Suppliers</h1>
      </div>
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg md:mt-10">
        <form onSubmit={handleAddSupplier} className="space-y-4">
          <div>
            <label
              htmlFor="supplierName"
              className="block text-sm font-medium text-gray-700"
            >
              Supplier Name
            </label>
            <input
              type="text"
              id="supplierName"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="supplierContact"
              className="block text-sm font-medium text-gray-700"
            >
              Supplier Contact
            </label>
            <input
              type="text"
              id="supplierContact"
              value={supplierContact}
              onChange={(e) => setSupplierContact(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Supplier
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Suppliers List</h2>
          <ul className="space-y-2">
            {suppliers.map((supplier) => (
              <li
                key={supplier.id}
                className="p-4 bg-gray-100 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{supplier.name}</p>
                  <p>{supplier.contact}</p>
                </div>
                <button
                  onClick={() => handleDeleteSupplier(supplier.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
