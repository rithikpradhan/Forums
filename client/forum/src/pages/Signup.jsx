import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      toast.success("Signup successful. Please login.");
      setTimeout(() => {
          navigate("/login");  
      }, 1000);
    
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-stone-50">

      <Toaster position="top-center" reverseOrder={false} />

      {/* Left Side (form) */}
      <div className="flex flex-col justify-center items-center shadow w-full lg:w-1/2 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded w-full max-w-md space-y-6 shadow-lg"
        >
          <h2 className="text-2xl mb-4 font-poppins text-center">Create an account</h2>
          <div>
            <label htmlFor="name" className="text-lg block">Name</label>
            <input
              className="w-full border p-3 mt-1 outline-blue-200 text-sm bg-blue-100 rounded"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg block">Email</label>
            <input
              className="w-full border p-3 mt-1 outline-blue-200 text-sm bg-blue-100 rounded"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg block">Password</label>
            <input
              className="w-full border p-3 mt-1 outline-blue-200 text-sm bg-blue-100 rounded"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 w-full text-white font-medium px-4 py-2 rounded-md mt-2"
            type="submit"
          >
            Sign up
          </button>
          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>

      {/* Right Side (banner) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-stone-900 rounded-bl-[300px] p-6">
        <div className="flex flex-col items-center ">
          <img
            src="../../src/assets/images/mainicon.png"
            alt=""
            className="w-2/3 max-w-xs mb-6"
          />
          <h1 className="text-white text-3xl lg:text-4xl font-bold text-center font-michroma">
            Speak, share, solve — that’s a forum.
          </h1>
        </div>
      </div>
    </div>
  );
}
