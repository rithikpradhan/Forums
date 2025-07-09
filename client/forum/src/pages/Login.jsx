import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/forum");
       }, 2000);

    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-stone-50">

       <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-stone-900 rounded-br-[300px] p-6 max-lg:hidden">

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

      <div className="flex flex-col justify-center items-center shadow w-full lg:w-1/2 max-lg:h-screen p-4 gap-8">
      <div className="flex flex-col gap-5">

        <h1 className="text-4xl">Welcome Back!</h1>
        <p className="text-gray-500">Please enter login details below</p>

      </div>
         <div className="flex flex-col items-center ">
          <img
            src="../../src/assets/images/user-login-3d-icon-download-in-png-blend-fbx-gltf-file-formats--account-password-safety-profile-pack-crime-security-icons-11502714.png_f=webp.png"
            alt=""
            className="w-2/3 max-w-xs mb-6"
          />
        </div>

      <form onSubmit={handleLogin} className=" p-5 rounded w-full max-w-md space-y-6">
         <Toaster position="top-center" reverseOrder={false} />
        <input
          className="w-full border p-3 mt-1 outline-blue-200 text-sm bg-blue-100 rounded"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border p-3 mt-1 outline-blue-200 text-sm bg-blue-100 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-blue-500 hover:underline cursor-pointer text-right"> Forget Password?</p>
        <button
          className="bg-blue-500 w-full text-white font-medium px-4 py-2 rounded-md mt-2 hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </form>

      </div>



    </div>
  );
}
