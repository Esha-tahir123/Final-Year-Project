// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../components/authentication/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (loggedUser) => {
      if (loggedUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", loggedUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ ...loggedUser, ...userData });
          } else {
            setUser(loggedUser);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(loggedUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);