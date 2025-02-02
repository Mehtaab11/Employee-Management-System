/* eslint-disable react/prop-types */
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className=" ">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="border-2 border-emerald-600 flex flex-col items-center justify-items-center gap-4 p-20 rounded-lg"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="rounded-full text-lg  bg-transparent border-2 border-emerald-600 px-4 py-3"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-full text-lg  bg-transparent border-2 border-emerald-600 px-4 py-3 placeholder:text-gray-400 "
            type="password"
            placeholder="Enter your password"
          />
          <button className="rounded-full text-lg placeholder:text-gray-400 cursor-pointer text-white  bg-emerald-600 w-full px-8 py-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
