import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../authentication/firebaseConfig";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);
        setTotalUsers(snapshot.size);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserCount();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white p-6"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/01/64/84/88/360_F_164848848_m1LqvsQjU9Y7uzpV7FmilLrpXcjJ4hSh.jpg')",
        backgroundSize: "cover", // Ensure the image covers the entire page
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      {/* Admin Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {/* Dashboard Overview */}
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Total Users */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Total Users</h3>
            {loading ? (
              <p className="text-lg">Loading...</p>
            ) : (
              <p className="text-lg">{totalUsers}</p>
            )}
          </div>
          {/* Card: Total Tasks */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Total Tasks</h3>
            <p className="text-lg">45</p>
          </div>
          {/* Card: Active Admins */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Active Admins</h3>
            <p className="text-lg">1</p>
          </div>
        </div>
      </section>

      {/* Action Panels */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Users */}
          <a
            href="/admin/manage-users"
            className="p-6 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center"
          >
            <i className="fas fa-users text-5xl mb-4 text-blue-500"></i>
            <h3 className="text-xl font-semibold">Manage Users</h3>
          </a>

          {/* Manage Tasks */}
          <NavLink
            to="/admin/manage-tasks"
            className={({ isActive }) =>
              `p-6 rounded-lg shadow-lg flex flex-col items-center ${
                isActive ? "bg-gray-700 text-white" : "bg-gray-800 hover:bg-gray-700"
              }`
            }
          >
            <i className="fas fa-tasks text-5xl mb-4 text-green-500"></i>
            <h3 className="text-xl font-semibold">Manage Tasks</h3>
          </NavLink>

          {/* Admin Profile */}
          <a
            href="/admin/profile"
            className="p-6 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center"
          >
            <i className="fas fa-user-cog text-5xl mb-4 text-purple-500"></i>
            <h3 className="text-xl font-semibold">Admin Profile</h3>
          </a>

         
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
