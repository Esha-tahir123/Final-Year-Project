import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import ManageUsers from "./ManageUsers";
import ManageTasks from "./ManageTasks";
import AdminProfile from "./AdminProfile";
import ProtectedRoute from "../auth/ProtectedRoute";
import UserProfile from "./UserProfile";

const AdminRoutes = ({ user }) => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRoute user={user}>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/manage-users"
        element={
          <ProtectedRoute user={user}>
            <ManageUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/manage-tasks"
        element={
          <ProtectedRoute user={user}>
            <ManageTasks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute user={user}>
            <AdminProfile />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/user-profile/:userId"
  element={
    <ProtectedRoute user={user}>
      <UserProfile />
    </ProtectedRoute>
  }
/>
Navigation 
    </Routes>
  );
};

export default AdminRoutes;
