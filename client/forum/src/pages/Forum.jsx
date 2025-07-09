import React from 'react'
// import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Course from "../components/Course";
import CreateCourse from "../components/CreateCourse";
import Saved from "../components/Saved";
import { useState } from "react";

export default function Forum() {

    const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "course":
        return <Course />;
      case "create-course":
        return <CreateCourse />;
      case "saved":
        return <Saved />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <div className="flex h-screen">

       <Sidebar setActivePage={setActivePage} />
       <div className="flex-1 p-4 bg-gradient-to-r from-violet-200 to-pink-200 overflow-auto ">{renderPage()}</div>


      {/* </main> */}
    </div>
  )
}