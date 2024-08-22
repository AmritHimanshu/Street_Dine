// Sidebar.js
import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TableViewIcon from "@mui/icons-material/TableView";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="w-[255px] h-screen bg-white p-8 hidden lg:block">
      <div className="text-purple-600 text-xl font-bold mb-10 p-4 text-center">
        StreetDine
      </div>
      <ul className="space-y-3">
        <li className="text-black p-3 rounded-xl font-bold bg-purple600 bg-opacity70 bg-gradient-to-r from-purple-500">
          <DashboardOutlinedIcon /> Dashboard
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <ListAltIcon /> Orders
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <AddCircleOutlineIcon /> Create Order
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <RestaurantMenuIcon /> Menu
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <TableViewIcon /> Tables
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <PeopleAltOutlinedIcon /> Employees
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <Inventory2OutlinedIcon /> Inventory
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <KitchenOutlinedIcon /> Kitchen Orders
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <AssessmentOutlinedIcon /> Reports
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <SettingsOutlinedIcon /> Settings
        </li>
        <li className="text-gray-500 hover:bg-gray-200 p-3 rounded-xl font-bold">
          <LogoutIcon /> Log Out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
