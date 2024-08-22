// Dashboard.js
import React, { useEffect, useRef, useState } from "react";
import DashboardCard from "./DashboardCard";
import NewOrder from "./NewOrder";

const Dashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    const scrollableElement = document.getElementById("scrollable-content");
    if (isPopupVisible) {
      scrollableElement.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      scrollableElement.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      scrollableElement.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div id="scrollable-content" className="py-12 pl-12 relative h-[100vh] overflow-auto">
      
        <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
        <div className="flex space-x-10 mb-6">
          <button className="bg-white text-gray-600 py-2 px-6 rounded-md">
            All
          </button>
          <button
            className="bg-yellow-400 text-black font-bold p-2 rounded-md"
            onClick={togglePopup}
          >
            New Orders
          </button>
          <button className="bg-white text-gray-600 py-2 px-6 rounded-md">
            Dine In
          </button>
          <button className="bg-white text-gray-600 py-2 px-6 rounded-md">
            Take Away
          </button>
          <button className="bg-white text-gray-600 py-2 px-6 rounded-md">
            Payments
          </button>
        </div>

        <div className="grid grid-cols-3 gap-y-10">
          {/* Example of an Order Card */}
          <DashboardCard table="T2" token="Token - 7" order="Order #021" />
          <DashboardCard table="T3" token="Token - 9" order="Order #022" />
          <DashboardCard table="T2" token="Token - 7" order="Order #021" />
          <DashboardCard table="T3" token="Token - 9" order="Order #022" />
          <DashboardCard table="T2" token="Token - 7" order="Order #021" />
        </div>

      {isPopupVisible && (
        <div
          ref={popupRef}
          className="absolute z-50 top-0 right-0 w-ful h-[100vh]"
        >
          <NewOrder onClick={togglePopup} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
