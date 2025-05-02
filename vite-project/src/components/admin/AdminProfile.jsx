import React from "react";

const AdminProfile = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Admin Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Profile</h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => alert("Feature coming soon!")}
          >
            Change Password
          </button>
        </div>

        {/* Admin Details */}
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Email:</span>
              <span>{user?.email || "Not Available"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Role:</span>
              <span>{user?.role || "Admin"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Joined:</span>
              <span>{user?.createdAt ? new Date(user.createdAt.seconds * 1000).toLocaleDateString() : "Not Available"}</span>
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Admin Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Manage Users */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded text-center"
              onClick={() => alert("Redirecting to Manage Users...")}
            >
              Manage Users
            </button>

            {/* Manage Tasks */}
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded text-center"
              onClick={() => alert("Redirecting to Manage Tasks...")}
            >
              Manage Tasks
            </button>

            {/* View Activity Logs */}
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded text-center"
              onClick={() => alert("Redirecting to Activity Logs...")}
            >
              View Activity Logs
            </button>

            {/* Update Profile */}
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded text-center"
              onClick={() => alert("Redirecting to Update Profile...")}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
