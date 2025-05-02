import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../authentication/firebaseConfig";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // View user profile
  const handleViewProfile = (userId) => {
    navigate(`/admin/user-profile/${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Manage Users</h1>
      {loading ? (
        <p className="text-center text-gray-400">Loading users...</p>
      ) : (
        <table className="w-full text-left bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-700 transition duration-150"
                >
                  <td className="py-3 px-4">{user.username || "N/A"}</td>
                  <td className="py-3 px-4">{user.email || "N/A"}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button
                      onClick={() => handleViewProfile(user.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
