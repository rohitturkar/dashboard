import React from "react";
import Header from "./header";
import { useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";

const MainDash = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  return (
    <div className="flex justify-between flex-col gap-12">
      <div>
        <Header />
      </div>

      <div className='mt-5'>{isDashboard ? <Dashboard /> : <Profile />}</div>
    </div>
  );
};

export default MainDash;
