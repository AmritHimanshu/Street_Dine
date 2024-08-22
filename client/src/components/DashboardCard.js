import React from 'react';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PrintIcon from '@mui/icons-material/Print';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

function DashboardCard({table,token,order}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[434px] h-[531px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 px-3 text-2xl bg-yellow-400 font-bold rounded-md">
                {table}
              </div>
              <div>
                <div className="font-bold text-lg text-gray-700">{token}</div>
                <div className="text-sm text-gray-700">{order}</div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="px-3 py-1 font-medium text-sm bg-blue-400 rounded-md">
                Dine in
              </div>
              <div className="text-sm text-gray-700">Not Paid</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-gray-600">Instructions</div>
            <div className="text-blue-600">Add extra cheese</div>
          </div>

          <div className="my-4">
            <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
              <thead>
                <tr className="text-[14px] text-gray-400">
                  <th className="text-start w-1/3">Items</th>
                  <th className="text-center w-1/3">Qty</th>
                  <th className="text-end w-1/3">Price</th>
                </tr>
              </thead>
              <tbody className="text-[14px] font-bold text-gray-600">
                <tr>
                  <td className="text-start">Veg Pizza</td>
                  <td className="text-center">1</td>
                  <td className="text-end">₹ 350</td>
                </tr>
                <tr>
                  <td className="text-start">Pasta</td>
                  <td className="text-center">1</td>
                  <td className="text-end">₹ 350</td>
                </tr>
                <tr>
                  <td className="text-start">Total amount</td>
                  <td className="text-center">-</td>
                  <td className="text-end">₹ 700</td>
                </tr>
                <tr>
                  <td className="text-start">Remaining amount</td>
                  <td className="text-center">-</td>
                  <td className="text-end">₹ 700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex mb-4 justify-between">
            <button className="bg-blue-500 text-white font-bold text-sm p-2 rounded">
                <Inventory2Icon style={{fontSize:"20px"}}/> View Items
            </button>
            <button className="bg-gray-500 text-white font-bold text-sm p-2 rounded">
                <PrintIcon style={{fontSize:"20px"}}/> Print Invoice
            </button>
          </div>
          <div className="flex mb-4 justify-between">
            <button className="bg-blue-500 text-white font-bold text-sm p-2 rounded">
                <PersonIcon style={{fontSize:"20px"}}/> Enter Customer Info
            </button>
            <button className="bg-gray-500 text-white font-bold text-sm p-2 rounded">
                <GroupIcon style={{fontSize:"20px"}}/> Assign Staff
            </button>
          </div>
          <div className="text-md font-medium my-4">Payment Options</div>
          <div className="flex items-center justify-between">
          <button className="bg-green-700 font-bold text-white p-2 rounded">
            Accept Cash Before
          </button>
          <button className="bg-green-700 font-bold text-white p-2 rounded">
            Pay Later
          </button>
          </div>
        </div>
  )
}

export default DashboardCard
