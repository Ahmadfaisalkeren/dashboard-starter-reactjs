import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md mt-5">
      <h1 className="text-3xl text-center font-bold text-sky-600">Auth Form</h1>
      <div className="container mt-10">
        <div className="w-1/2 mx-auto">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 ${
                isLogin ? "bg-sky-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 ${
                !isLogin ? "bg-sky-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Signup
            </button>
          </div>
          <div className="relative w-full h-96 overflow-hidden">
            <div
              className={`absolute w-full transition-transform duration-500 ${
                isLogin
                  ? "transform translate-x-0"
                  : "transform -translate-x-full"
              }`}
            >
              <form>
                <h2 className="text-2xl font-bold mb-4 text-sky-600 text-center">
                  Login Form
                </h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
                />
                <button className="w-full bg-sky-600 hover:bg-sky-500 duration-300 text-white py-2 rounded flex justify-center">
                  Login
                </button>
              </form>
            </div>
            <div
              className={`absolute w-full transition-transform duration-500 ${
                !isLogin
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
            >
              <form>
                <h2 className="text-2xl font-bold mb-4 text-sky-600 text-center">
                  Signup Form
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
                />
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
                />
                <button className="w-full bg-sky-600 hover:bg-sky-500 duration-300 text-white py-2 rounded flex justify-center">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
