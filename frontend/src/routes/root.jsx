import React from "react";
import { Outlet, useLocation } from "react-router-dom";
export default function Root() {
    const location = useLocation();
    const currentTab = location.pathname;
    return (
        <div className="flex">
      {/* Sidebar */}
      <div id="sidebar" className="p-6 space-y-6 border-r-2 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Menu</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href={`/`}
                className={`text-lg hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentTab==="/" && "text-blue-500"}`}
              >
                Patients
              </a>
            </li>
            <li>
              <a
              href={`employees`}
                className={`text-lg hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentTab==="/employees" && "text-blue-500"}`}
              >
                Employees
              </a>
            </li>
            <li>
              <a
              href={`billings`}
                className={`text-lg hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentTab==="/billings" && "text-blue-500"}`}
              >
                Billings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Details Panel */}
      <div id="detail" className="flex-1 p-6 bg-gray-50">
        {/* This is where the contact details would go */}
        <Outlet />
      </div>
    </div>
    );
  }
  