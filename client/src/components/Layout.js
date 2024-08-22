// Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="flex-1 bg-gray-100">
        <Dashboard />
      </main>
    </div>
  );
};

export default Layout;
