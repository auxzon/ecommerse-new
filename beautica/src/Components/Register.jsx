import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    state: "",
    postcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // Remove confirmPassword from formData before sending to backend
      const { confirmPassword, ...dataToSend } = formData;
      console.log(dataToSend);

      const response = await axios.post("http://localhost:8000/Ecart/register", dataToSend);

      alert("Registration successful:", response.data);
      // Reset form after successful submission
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        state: "",
        postcode: "",
      });
    } catch (error) {
      alert("Registration error:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-16">
          {[
            { label: "Email Address", name: "email", type: "email", required: true },
            { label: "Password", name: "password", type: "password", required: true },
            { label: "Confirm Password", name: "confirmPassword", type: "password", required: true },
            { label: "First Name", name: "firstName", type: "text", required: true },
            { label: "Last Name", name: "lastName", type: "text", required: true },
            { label: "Phone Number", name: "phoneNumber", type: "number" },
            { label: "Address Line 1", name: "addressLine1", type: "text", required: true },
            { label: "Address Line 2", name: "addressLine2", type: "text" },
            { label: "City", name: "city", type: "text", required: true },
            { label: "Country", name: "country", type: "text" },
            { label: "State", name: "state", type: "text" },
            { label: "Postcode", name: "postcode", type: "text" },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label} {field.required && "*"}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-48 py-2 px-4 md:ml-16 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

