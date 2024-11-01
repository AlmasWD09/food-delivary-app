"use client"
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const page = () => {
   const [orders] = useState([
     {
       id: "#2632",
       name: "Brooklyn Zoe",
       payment: "Cash",
       time: "13 min",
       type: "Delivery",
       status: "Delivered",
       total: "£12.00",
     },
     {
       id: "#2633",
       name: "Alice Krejčová",
       payment: "Paid",
       time: "49 min",
       type: "Collection",
       status: "Collected",
       total: "£14.00",
     },
     {
       id: "#2634",
       name: "Jurriaan van",
       payment: "Cash",
       time: "07 min",
       type: "Delivery",
       status: "Cancelled",
       total: "£18.00",
     },
     // Add more orders as needed
   ]);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 lg:p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Order History</h1>
          <div className="flex items-center space-x-4">
            <input type="date" className="p-2 border rounded-md" />
            <input type="date" className="p-2 border rounded-md" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b pb-2 mb-4">
          <button className="text-orange-600 font-semibold">All Order</button>
          <button className="text-gray-500">Summary</button>
          <button className="text-gray-500">Completed</button>
          <button className="text-gray-500">Cancelled</button>
        </div>

        {/* Order Table */}
        <table className="lg:min-w-full bg-white border rounded-md shadow">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left text-gray-700 font-semibold">Id</th>
              <th className="p-4 text-left text-gray-700 font-semibold">
                Name
              </th>
              <th className="p-4 text-left text-gray-700 font-semibold">
                Payment
              </th>
              <th className="p-4 text-left text-gray-700 font-semibold">
                Time remaining
              </th>
              <th className="p-4 text-left text-gray-700 font-semibold">
                Type
              </th>
              <th className="p-4 text-left text-gray-700 font-semibold">
                Status
              </th>
              <th className="p-4 text-right text-gray-700 font-semibold">
                Total
              </th>
              <th className="p-4 text-right text-gray-700 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.name}</td>
                <td className="p-4">{order.payment}</td>
                <td className="p-4">{order.time}</td>
                <td className="p-4">{order.type}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4 text-right">{order.total}</td>
                <td className="p-4 text-right">
                  <button className="text-gray-600 w-10 font-semibold">
                    <Icon icon="pepicons-pencil:dots-y" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default page;
