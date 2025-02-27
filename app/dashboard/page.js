'use client';
import { useState } from 'react';

export default function Dashboard() {
  // TODO: Replace with actual auth check
  const isAdmin = false;

  // Customer dashboard data
  const customerStats = {
    totalContainers: 24,
    activeShipments: 12,
    totalCost: 45600,
    recentActivities: [
      { id: 1, message: "Container XYZ-123 arrived at port", time: "2 hours ago" },
      { id: 2, message: "New shipment ABC-456 registered", time: "5 hours ago" },
      { id: 3, message: "Container DEF-789 cleared customs", time: "1 day ago" },
    ],
    notifications: [
      { id: 1, title: "Shipment Update", message: "Your container has cleared customs", time: "1 hour ago" },
      { id: 2, title: "Payment Received", message: "Payment for invoice #123 received", time: "2 hours ago" },
    ]
  };

  // Admin dashboard data
  const adminStats = {
    totalCustomers: 45,
    activeShipments: 120,
    totalRevenue: 156000,
    recentActivities: [
      { id: 1, message: "New customer registered", time: "1 hour ago" },
      { id: 2, message: "Payment received from Customer A", time: "3 hours ago" },
      { id: 3, message: "Shipment status updated", time: "5 hours ago" },
    ]
  };

  return (
    <div className="space-y-6">
      {isAdmin ? (
        // Admin Dashboard
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Customers</h3>
              <p className="text-3xl font-bold mt-2">{adminStats.totalCustomers}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Active Shipments</h3>
              <p className="text-3xl font-bold mt-2">{adminStats.activeShipments}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Revenue</h3>
              <p className="text-3xl font-bold mt-2">${adminStats.totalRevenue}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {adminStats.recentActivities.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="text-gray-800">{activity.message}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Customer Dashboard
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Containers</h3>
              <p className="text-3xl font-bold mt-2">{customerStats.totalContainers}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Active Shipments</h3>
              <p className="text-3xl font-bold mt-2">{customerStats.activeShipments}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Cost</h3>
              <p className="text-3xl font-bold mt-2">${customerStats.totalCost}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {customerStats.recentActivities.map((activity) => (
                  <div key={activity.id} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <p className="text-gray-800">{activity.message}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-4">
                {customerStats.notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start border-b pb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                      🔔
                    </div>
                    <div>
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-gray-600">{notification.message}</p>
                      <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 