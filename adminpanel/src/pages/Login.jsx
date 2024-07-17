import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [Adminemail, setAdminemail] = useState("");
  const [Adminpassword, setAdminpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { Adminemail, Adminpassword };
    try {
      const response = await axios.post(
        "http://localhost:8000/Ecart/Login",
        body
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setAdminemail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setAdminpassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-md bg-blue-600 text-white"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
