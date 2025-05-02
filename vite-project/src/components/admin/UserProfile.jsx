import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../authentication/firebaseConfig";

const UserProfile = () => {
  const { userId } = useParams(); // Get user ID from URL params
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return <div className="text-white text-center py-20">Loading user details...</div>;
  }

  if (!userDetails) {
    return <div className="text-white text-center py-20">User not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">User Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* User Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
            <p className="text-lg">
              <strong>Username:</strong> {userDetails.username || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {userDetails.email || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Role:</strong> {userDetails.role || "User"}
            </p>
            <p className="text-lg">
              <strong>Joined On:</strong>{" "}
              {userDetails.createdAt
                ? new Date(userDetails.createdAt.seconds * 1000).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          {/* Skill Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skill Information</h2>
            <p className="text-lg">
              <strong>Skill Level:</strong> {userDetails.skillLevel || "Not Set"}
            </p>
            <p className="text-lg">
              <strong>Primary Language:</strong> {userDetails.selectedLanguage || "Not Set"}
            </p>
            <p className="text-lg">
              <strong>Goals:</strong> {userDetails.goals || "Not Set"}
            </p>
          </div>
        </div>

        {/* Attempted Challenges */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Challenges Attempted</h2>
          {userDetails.attemptedChallenges && userDetails.attemptedChallenges.length > 0 ? (
            <table className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-600">
                  <th className="py-3 px-4">Challenge Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Score</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.attemptedChallenges.map((challenge, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-600 transition duration-150"
                  >
                    <td className="py-3 px-4">{challenge.name}</td>
                    <td className="py-3 px-4">{challenge.category}</td>
                    <td className="py-3 px-4">{challenge.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-lg text-gray-400">No challenges attempted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
