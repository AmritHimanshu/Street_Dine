import React, { useCallback, useEffect, useRef, useState } from "react";
import DashboardCard from "./DashboardCard";
import NewOrder from "./NewOrder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-GB", options);

  const [isSidebar, setIsSidebar] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = useCallback(() => {
    setIsPopupVisible((prev) => !prev);
  }, []);

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
    <div
      id="scrollable-content"
      className="pb-16 pt-5 px-5 lg:py-12 lg:px-12 relative h-screen overflow-auto"
    >
      <div className="flex items-center justify-between mb-5 md:mb-10">
        <div className="flex space-x-2">
          <div className="block md:hidden">
            <MenuIcon onClick={() => setIsSidebar((prev) => !prev)} />
          </div>
          <h1 className="text-md lg:text-2xl font-bold">Dashboard</h1>
        </div>

        <div className="flex items-center justify-center space-x-5">
          <p className="font-semibold text-md lg:text-xl text-gray-700 hidden md:block">
            {formattedDate}
          </p>
          <div className="flex items-center space-x-3">
            <AccountCircleIcon style={{ fontSize: "40px" }} />
            <div className="hidden md:block">
              <p className="font-semibold text-gray-700">Himanshu</p>
              <p className="text-sm text-center text-purple-700">Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap space-x-3 lg:space-x-10 mb-6 justify-center">
        <button className="bg-white text-gray-600 my-1 py-1 px-3 lg:py-2 lg:px-6 rounded-md">
          All
        </button>
        <button
          className={`${
            isPopupVisible
              ? "bg-yellow-400"
              : "bg-white text-gray-600 font-normal"
          } text-black font-bold my-1 py-1 px-3 lg:py-2 lg:px-6 rounded-md`}
          onClick={togglePopup}
        >
          New Orders
        </button>
        <button className="bg-white text-gray-600 my-1 py-1 px-3 lg:py-2 lg:px-6 rounded-md">
          Dine In
        </button>
        <button className="bg-white text-gray-600 my-1 py-1 px-3 lg:py-2 lg:px-6 rounded-md">
          Take Away
        </button>
        <button className="bg-white text-gray-600 my-1 py-1 px-3 lg:py-2 lg:px-6 rounded-md">
          Payments
        </button>
      </div>

      <div className="grid grip-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 justify-items-center">
        <DashboardCard table="T2" token="Token - 7" order="Order #021" />
        <DashboardCard table="T3" token="Token - 9" order="Order #022" />
        <DashboardCard table="T2" token="Token - 7" order="Order #021" />
        <DashboardCard table="T3" token="Token - 9" order="Order #022" />
        <DashboardCard table="T2" token="Token - 7" order="Order #021" />
      </div>

      {isPopupVisible && (
        <div
          ref={popupRef}
          className="absolute z-50 top-0 right-0 h-screen overflow-auto"
        >
          <NewOrder onClick={togglePopup} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
