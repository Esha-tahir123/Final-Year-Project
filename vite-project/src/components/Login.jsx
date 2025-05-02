import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { auth, db } from './authentication/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Redirect based on role
        if (userData.role === 'admin') {
          navigate('/admin-panel'); // Admin Dashboard
        } else {
          navigate('/DeveloperHome'); // User Home Page
        }
      } else {
        setError('No user data found. Please contact support.');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else {
        setError(err.message); // Display the actual error message for debugging
      }
    }
  };

  const handleCloseError = () => setError(null);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.pikbest.com/wp/202408/orange-gradient-background-and-black-with-abstract-3d-wave-effect_9716896.jpg!bw700')" }}
    >
      <div className="w-96 p-8 text-center bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-lg rounded-lg">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white mb-6">Login</h2>
          <div className="relative border-b-2 border-gray-300 mb-6">
            <input
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-10 text-white bg-transparent border-none outline-none"
            />
          </div>
          <div className="relative border-b-2 border-gray-300 mb-6">
            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-10 text-white bg-transparent border-none outline-none"
            />
          </div>
          <button
            type="submit"
            className="py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 border-transparent rounded-lg transition duration-300 hover:from-red-600 hover:to-orange-900"
          >
            Log In
          </button>
          {error && (
            <div className="fixed inset-0 flex items-center justify-center z-10">
              <div className="bg-black bg-opacity-70 p-4 rounded-md text-white">
                <p className="mb-2">{error}</p>
                <button onClick={handleCloseError} className="text-orange-400 hover:underline">
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="mt-8 text-white">
            <p>
              Don't have an account?{' '}
              <RouterLink to="/register" className="text-orange-400 hover:underline">
                Register
              </RouterLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
