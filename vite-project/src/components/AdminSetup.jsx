import React, { useState } from "react";
import { auth, db } from "./authentication/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const AdminSetup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Check if an admin already exists
      const usersSnapshot = await getDocs(collection(db, "users"));
      const adminExists = usersSnapshot.docs.some(
        (doc) => doc.data().role === "admin"
      );

      if (adminExists) {
        setError("An admin already exists. Contact support to reset admin credentials.");
        return;
      }

      // Create admin in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store admin details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email,
        role: "admin",
        createdAt: new Date(),
      });

      setSuccess("Admin account created successfully!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Error creating admin:", err);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Setup</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 mb-3 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Create Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSetup;
