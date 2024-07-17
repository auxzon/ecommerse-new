import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [Adminname, setAdminname] = useState("");
  const [Adminemail, setAdminemail] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [Adminpassword, setAdminpassword] = useState("");
  const navigate = useNavigate();
   
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const body={
      Adminid: Math.floor(Math.random() * 1000),
      Adminname,
      Adminemail,
      confirmpassword,
      Adminpassword

    }

      const response = await axios.post(
        "http://localhost:8000/Ecart/Signup",body);

      alert(response.data.message);
      navigate("/login");
      // Optionally, redirect to login page or show success message
    } catch (error) {
      alert( error.response.data.message);
      // Handle error response from server (e.g., display error message)
    }

  };
 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              onChange={(e) => setAdminname(e.target.value)}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              onChange={(e) => setAdminemail(e.target.value)}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              onChange={(e) => setAdminpassword(e.target.value)}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-md bg-blue-600 text-white"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
