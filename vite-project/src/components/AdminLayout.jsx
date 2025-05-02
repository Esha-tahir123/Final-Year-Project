import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Admin Header */}
      <header className="bg-gray-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <nav className="flex space-x-6">
            <Link to="/admin" className="hover:underline">Dashboard</Link>
            <Link to="/admin/manage-users" className="hover:underline">Manage Users</Link>
            <Link to="/admin/manage-tasks" className="hover:underline">Manage Tasks</Link>
            <Link to="/admin/profile" className="hover:underline">Profile</Link>
            <Link to="/admin/logout" className="text-red-500 hover:underline">Logout</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-gray-800 p-4 mt-10 text-center">
        <p>&copy; 2024 Admin Dashboard</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
