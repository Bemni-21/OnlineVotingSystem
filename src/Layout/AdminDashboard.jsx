import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullhorn, faCheckCircle, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const [searchText, setSearchText] = useState('');

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="fixed w-64 bg-gray-800 text-white flex flex-col h-screen">
        {/* Logo */}
        <div className="px-6 py-4">
          <div className="text-indigo-400 text-2xl font-semibold">Admin Dashboard</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-2 mt-8">
          {/* Nominees */}
          <Link
            to="/admin/nominees"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faUsers} className="h-5 w-5 mr-3 text-gray-400" />
            Nominees
          </Link>

          {/* Voters */}
          <Link
            to="/admin/voters"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-3 text-gray-400" />
            Voters
          </Link>

          {/* Eligible Nominees */}
          <Link
            to="/admin/eligible-nominees"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 mr-3 text-gray-400" />
            Eligible Nominees
          </Link>

          {/* Announcement */}
          <Link
            to="/admin/announcement"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded hover:bg-gray-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faBullhorn} className="h-5 w-5 mr-3 text-gray-400" />
            Announcement
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="px-6 py-4">
          <button className="w-full px-4 py-2 text-sm font-medium text-gray-300 bg-blue-700 rounded hover:bg-blue-500 hover:text-white">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        <main className="flex-1 bg-gray-100">
          {/* Nested Routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
