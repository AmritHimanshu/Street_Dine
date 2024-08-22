import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import AddIcon from "@mui/icons-material/Add";

function NewOrder({onClick}) {
  return (
    <div className="w-[489px] bg-white p-5 ml-auto shadow-2xl h-full">
      <div className="text-end">
        <CloseIcon onClick={onClick} style={{cursor:'pointer'}}/>
      </div>
      <div className="px-10 pt-5 font-bold text-2xl text-center">
        Order Information
      </div>

      <div className="flex items-center justify-center space-x-5 mb-5 mt-4">
        <div className="px-5 py-1 bg-blue-500 rounded-md font-bold text-white border-blue-500 border-[2px]">
          Dine in
        </div>
        <div className="px-5 py-1 rounded-md font-medium text-gray-700 border-blue-500 border-[2px]">
          Take Away
        </div>
      </div>

      <div className="flex items-center justify-between font-medium text-md my-5">
        <div>Order #021</div>
        <div>Token - 7</div>
        <div>Table No - 2</div>
      </div>
      <div className="text-gray-700">Items</div>
      <div className="my-3 space-y-3">
        <div className="flex items-end justify-between">
          <div className="flex items-center space-x-3">
            <div className="py-2">
              <img
                src="https://media.istockphoto.com/id/842082336/photo/homemade-veggie-pizza-with-mushrooms-peppers.jpg?s=612x612&w=0&k=20&c=op1vZnGjlB_c3w6Z-ohPo0wn4QveujVKZu4vTZCOWnc="
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[17px]">
                Veg Pizza (Medium)
              </div>
              <div className="text-[13px] text-gray-400 font-semibold">1X</div>
              <div className="text-[13px] text-gray-400 font-semibold">
                Add extra cheese
              </div>
            </div>
          </div>
          <div className="text-xl font-bold">₹ 100</div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center space-x-3">
            <div className="py-2">
              <img
                src="https://st2.depositphotos.com/1326558/7226/i/450/depositphotos_72263189-stock-photo-penne-pasta-in-tomato-sauce.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[17px]">
                Veg Pasta (White Sauce)
              </div>
              <div className="text-[13px] text-gray-400 font-semibold">1X</div>
              <div className="text-[13px] text-gray-400 font-semibold">
                Add extra cheese
              </div>
            </div>
          </div>
          <div className="text-xl font-bold">₹ 100</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-2 my-4">
        <button className="bg-yellow-400 text-black text-md p-2 rounded-md">
          <AddIcon /> Add Items
        </button>
        <button className="bg-blue-500 text-white text-md p-2 rounded-md">
          <PrintIcon style={{ fontSize: "20px" }} /> Print KOT
        </button>
        <button className="bg-gray-500 text-white text-md p-2 rounded-md">
          <PrintIcon style={{ fontSize: "20px" }} /> Print Invoice
        </button>
        <button className="bg-green-700 text-white text-md p-2 rounded-md">
          Pay Later
        </button>
      </div>

      <div className="text-md my-4">Write Instructions</div>

      <div className="bg-gray-100 p-7">
        <ul className="text-blue-500 font-bold space-y-3 list-disc list-inside">
          <li>Add extra cheese in Pizza</li>
          <li>Add extra cheese in Pasta</li>
        </ul>
      </div>

      <div className="text-md my-4">Change Payment Option:</div>

      <button className="bg-green-700 font-bold text-white p-4 rounded w-full my-2">
        Accept Cash Before
      </button>
      <button className="bg-yellow-300 font-bold text-black p-4 rounded w-full my-2">
        Update Order
      </button>
    </div>
  );
}

export default NewOrder;
