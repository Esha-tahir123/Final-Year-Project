import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoggedInNavbar from "./components/LoggedInNavbar";
import ProfileCompletion from './components/ProfileCompletion';
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Register from "./components/Register";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import FindTalent from "./components/FindTalent";
import Community from "./components/Community";
import { auth, db } from "./components/authentication/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import AssessmentInstructions from "./components/Instructions";
import Profile from "./components/Profile";
import DeveloperHome from "./components/DeveloperHome";
import Assessment from "./components/AssessmentCard";
import HtmlCssAssessment from "./components/htmlcss-assessment";
import JavaScriptAssessment from "./components/javascript-assessment";
import PythonAssessment from "./components/python-assessment";
import CsharpAssessment from "./components/csharp-assessment";
import LevelSelection from "./components/LevelSelectionModal";
import HTMLCSSAssessment from "./components/htmlcss-assessment";
import AdminRoutes from "./components/admin/AdminRoutes"; // Import admin routes

const App = () => {
  const [user, setUser] = useState(null); // State to track logged in user
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const location = useLocation();

  const navigate = useNavigate(); // Hook for navigation

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (loggedUser) => {
      if (loggedUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", loggedUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ ...loggedUser, ...userData });
            setIsAdmin(userData.role === "admin"); // Check admin role
          } else {
            setUser(null);
            setIsAdmin(false);

          }
          
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);
  const DynamicAssessment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const language = queryParams.get("language");
  
    switch (language) {
      case "C#":
        return <CsharpAssessment />;
      case "HTML/CSS":
        return <HTMLCSSAssessment />;
      case "JavaScript":
        return <JavaScriptAssessment />;
      case "Python":
        return <PythonAssessment />;
      default:
        return <p>Error: Invalid language</p>;
    }
  };
  
  // Logout function
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign user out from Firebase
      setUser(null); // Clear user state
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      {/* Render the Navbar conditionally */}
      {!isAdmin && (user ? <LoggedInNavbar onLogout={handleLogout} /> : <Navbar />)}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Workflow />
              <Community />
              <Testimonials />
              {!user && <Footer />}
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/findtalent" element={<FindTalent />} />

        {/* User Routes */}
        {user && !isAdmin &&  <Route path="/DeveloperHome" element={
              user?.profileCompleted ? <DeveloperHome /> : <Navigate to="/profile-completion" replace />
            } />}
        {user && !isAdmin && <Route path="/Profile" element={
              user?.profileCompleted ? <Profile user={user} /> : <Navigate to="/profile-completion" replace />
            } />}
        {user && !isAdmin && <Route path="/Community" element={
              user?.profileCompleted ? <Community user={user} /> : <Navigate to="/profile-completion" replace />
            } />}

        <Route path="/profile-completion" element={<ProfileCompletion user={user} />} />
        <Route path="/assessment" element={<DynamicAssessment />} />

        <Route path="/htmlcss-assessment" element={<HTMLCSSAssessment />} />
        <Route path="/python-assessment" element={<PythonAssessment />} />
        <Route path="/csharp-assessment" element={<CsharpAssessment />} />
        <Route path="/levels" element={<LevelSelection />} />
        <Route path="/Instructions" element={<AssessmentInstructions />} />

        {/* Admin Routes */}
        {isAdmin && <Route path="/*" element={<AdminRoutes user={user} />} />}
      </Routes>
      {   user && !isAdmin && <Footer />}
    </>
  );
  
  
};

export default App;
