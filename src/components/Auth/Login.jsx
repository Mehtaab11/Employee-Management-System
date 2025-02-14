import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950">
      <div className="absolute top-0 right-0 p-5 flex flex-col gap-1 bg-gray-900 text-white text-sm">
        <h1 className="text-lg">Credentials to login Admin</h1>
        <p>admin@me.com</p>
        <p>123</p>
        <h1 className="text-lg">Credentials to login employees</h1>
        <p>employee1-6@example.com</p>
        <p>123</p>
        <details className="text-nowrap  w-full">
          {" "}
          <p className=" w-full text-nowrap">
            Task can only be assigned using name of the employee
          </p>
          <ul className="bullet-disc ml-5 ">
            {" "}
            <li>Aarav</li>
            <li>Vihaan</li>
            <li>Kabir</li>
            <li>Ishaan</li>
            <li>Aryan</li>
          </ul>
        </details>{" "}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 rounded-3xl p-10 w-96"
      >
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Welcome Back! 👾
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-lg text-gray-200 bg-gray-800 border border-gray-600 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-lg text-gray-200 bg-gray-800 border border-gray-600 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
            type="password"
            placeholder="Enter your Password"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px #3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl px-6 py-3 transition duration-300 shadow-md hover:shadow-lg"
          >
            Log In
          </motion.button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
