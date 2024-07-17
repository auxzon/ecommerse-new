
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
 
function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false); // State to control OTP field visibility
  const [otpVerified, setOtpVerified] = useState(false); // State to track OTP verification status
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
 
  const handleSubmit = (e) => {
    setShowOtpField(true);
    const body = {
      email,
    };
 
    e.preventDefault();
    const response = axios.post("http://localhost:8000/Ecart/forgotpass", body);
    console.log(response);
  };
 
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to verify OTP (replace with actual API call)
    // For demo, simulate successful OTP verification
    if (otp === "123456") {
      // Replace "123456" with the actual OTP verification logic
      setOtpVerified(true);
      console.log("OTP verified successfully.");
      // Further logic to reset password or navigate to the next step
    } else {
      console.log("Invalid OTP. Please try again.");
      // Handle invalid OTP case (display error message, reset OTP field, etc.)
    }
  };
 
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
 
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
 
  const recaptchaRef = React.createRef();
 
  return (
    <div className="mx-auto p-6 border border-gray-300 rounded-lg bg-white md:px-24">
      <h2 className="text-2xl font-semibold text-left mb-6">Reset Password</h2>
      {!showOtpField ? (
        <form onSubmit={handleSubmit}>
          <p className="text-left mb-4">
            Fill in your email below to request a new password. An email will be
            sent to the address below containing a link to verify your email
            address.
          </p>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={(value) => console.log("Captcha value:", value)}
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-44 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Reset Password
          </button>
        </form>
      ) : !otpVerified ? (
        <form onSubmit={handleOtpSubmit}>
          <p className="text-left mb-4">
            An OTP has been sent to your email address. Please enter the OTP to
            reset your password.
          </p>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="otp"
            >
              OTP*
            </label>
            <input
              type="text"
              name="otp"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              required
              className="w-full md:w-44 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-44 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Submit OTP
          </button>
        </form>
      ) : (
        <form>
          <p className="text-left mb-4">
            Please enter a new password and confirm it.
          </p>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="newPassword"
            >
              New Password*
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              required
              className="w-full md:w-44 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password*
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="w-full md:w-44 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-44 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Update Password
          </button>
        </form>
      )}
    </div>
  );
}
 
export default ResetPassword;
 
 
