import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { auth, db } from './authentication/firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { AlertCircle, CheckCircle2, Mail, Lock, User, AlertTriangle } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const validateUsername = (username) => {
    const hasOnlyNumbers = /^\d+$/.test(username);
    const isValid = username.length >= 3 && !hasOnlyNumbers;
    return isValid;
  };

  const validateEmail = (email) => {
    const validDomains = ['.com', '.org', '.edu', '.gov', '.net'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasDomain = validDomains.some(domain => email.toLowerCase().endsWith(domain));
    return emailRegex.test(email) && hasDomain;
  };

  const validatePassword = (password) => {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    return hasNumber && hasLetter && hasSpecial && isLongEnough;
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: user.displayName || '',
        email: user.email,
        createdAt: new Date(),
        profileCompleted: false,
        photoURL: user.photoURL || '',
        authProvider: 'google'
      });

      setSuccessMessage(true);
    } catch (error) {
      console.error('Error with Google signup:', error);
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setValidationErrors({});

    const errors = {};
    
    if (!validateUsername(username)) {
      errors.username = 'Username must be at least 3 characters and cannot contain only numbers';
    }
    
    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address with a recognized domain';
    }
    
    if (!validatePassword(password)) {
      errors.password = 'Password must contain at least 8 characters, including numbers, letters, and special characters';
    }
    
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        createdAt: new Date(),
        profileCompleted: false,
        authProvider: 'email'
      });

      setSuccessMessage(true);
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  const handleCloseError = () => setError(null);

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.pikbest.com/wp/202408/orange-gradient-background-and-black-with-abstract-3d-wave-effect_9716896.jpg!bw700')",
      }}
    >
      <div className="w-full max-w-md p-8 text-center bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-lg rounded-lg shadow-xl">
        {!successMessage ? (
          <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-bold text-white mb-6">
                Create Account
              </h2>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 bg-black bg-opacity-20 text-white rounded-lg border ${
                    validationErrors.username ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {validationErrors.username && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    {validationErrors.username}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 bg-black bg-opacity-20 text-white rounded-lg border ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {validationErrors.email && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    {validationErrors.email}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 bg-black bg-opacity-20 text-white rounded-lg border ${
                    validationErrors.password ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {validationErrors.password && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    {validationErrors.password}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 bg-black bg-opacity-20 text-white rounded-lg border ${
                    validationErrors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {validationErrors.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    {validationErrors.confirmPassword}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="py-3 px-4 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg transition duration-300 hover:from-red-600 hover:to-orange-900 shadow-lg"
              >
                Create Account
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-white bg-black bg-opacity-50">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>
            </form>

            <div className="mt-8 text-white">
              <p>
                Already have an account?{' '}
                <RouterLink to="/login" className="text-orange-400 hover:underline">
                  Login
                </RouterLink>
              </p>
            </div>
          </>
        ) : (
          <div className="text-center text-white">
            <div className="mb-6">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome Aboard! 🎉</h2>
            <div className="bg-black bg-opacity-30 p-6 rounded-lg mb-6">
              <p className="text-lg mb-4">
                Your account has been created successfully! To get the most out of our platform, 
                let's complete your profile with some additional information.
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-300 mb-4">
                <AlertCircle className="w-5 h-5" />
                <span>This step is required to access all features</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/profile-completion')}
              className="w-full py-3 px-6 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg transition duration-300 hover:from-red-600 hover:to-orange-900 shadow-lg"
            >
              Complete Your Profile
            </button>
          </div>
        )}

        {error && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl max-w-sm mx-4">
              <div className="flex items-center gap-2 mb-4 text-red-600">
                <AlertCircle className="w-6 h-6" />
                <h3 className="font-semibold">Error</h3>
              </div>
              <p className="mb-4">{error}</p>
              <button
                onClick={handleCloseError}
                className="w-full py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;