// src/components/Sidebar/Sidebar.js
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RxDashboard } from "react-icons/rx";
import { IoBookOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { LuCircleFadingPlus } from "react-icons/lu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar({ setActivePage, sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full z-40 bg-white/60 backdrop-blur-md shadow-lg w-[80%] sm:w-64 p-4 flex flex-col transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <Toaster position="top-center" reverseOrder={true} />

      {/* University name/logo */}
      <div className="mb-8 px-4">
        <h2 className="text-2xl text-center font-bold border-b-2 pb-6 border-blue-500">Forums</h2>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-4 mb-8 flex-1">
        <button
          onClick={() => {
            setActivePage("dashboard");
            setSidebarOpen(false);
          }}
          className="text-gray-700 flex items-center ml-3 gap-2 hover:text-blue-500 hover:bg-white/50 hover:font-medium hover:outline-1 hover:shadow-xl hover:backdrop-blur-sm p-3 rounded-lg hover:scale-105 transition-all duration-200"
        >
          <RxDashboard size={22} /> Dashboard
        </button>

        {/* Courses With Dropdown */}
        <div className="pr-8">
          <button
            onClick={() => setIsCourseOpen(!isCourseOpen)}
            className="w-full text-gray-700 flex items-center ml-3 gap-2 hover:text-blue-500 hover:bg-white/50 hover:outline-1 hover:font-medium hover:shadow-xl hover:backdrop-blur-sm p-3 rounded-lg hover:scale-105 transition-all duration-200"
          >
            <IoBookOutline size={24} /> Course
            <div className="ml-auto">{isCourseOpen ? <IoChevronUp /> : <IoChevronDown />}</div>
          </button>

          {/* Dropdown Items */}
          <AnimatePresence initial={false}>
            {isCourseOpen && (
              <motion.div
                key="course-dropdown"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 ml-8 flex flex-col gap-2"
              >
                <button className="text-gray-700 hover:text-blue-900 hover:bg-blue-100 p-2 rounded-lg transition-all duration-200">
                  Machine Learning
                </button>
                <button className="text-gray-700 hover:text-blue-900 hover:bg-blue-100 p-2 rounded-lg transition-all duration-200">
                  Cyber Security
                </button>
                <button className="text-gray-700 hover:text-blue-900 hover:bg-blue-100 p-2 rounded-lg transition-all duration-200">
                  Node Js
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => {
            setActivePage("create-course");
            setSidebarOpen(false);
          }}
          className="text-gray-700 flex items-center ml-3 gap-2 hover:text-blue-500 hover:bg-white/50 hover:outline-1 hover:font-medium hover:shadow-xl hover:backdrop-blur-sm p-3 rounded-lg hover:scale-105 transition-all duration-200"
        >
          <LuCircleFadingPlus size={22} /> Create Course
        </button>

        <button
          onClick={() => {
            setActivePage("saved");
            setSidebarOpen(false);
          }}
          className="text-gray-700 flex items-center ml-3 gap-2 hover:text-blue-500 hover:bg-white/50 hover:outline-1 hover:font-medium hover:shadow-xl hover:backdrop-blur-sm p-3 rounded-lg hover:scale-105 transition-all duration-200"
        >
          <FaRegBookmark size={20} /> Saved
        </button>
      </nav>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          localStorage.clear();
          toast.success("Logged out successfully!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }}
      >
        Logout
      </button>
    </aside>
  );
}
