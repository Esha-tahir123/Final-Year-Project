import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 


const firebaseConfig = {
  apiKey: "AIzaSyAZ24zC0L_7yr7TMBgJOvPSWKR4s9ThB_8",
  authDomain: "dsbg-7a726.firebaseapp.com",
  projectId: "dsbg-7a726",
  storageBucket: "dsbg-7a726.appspot.com",
    messagingSenderId: "342503366495",
  appId: "1:342503366495:web:f277da311443e1829d20ea",
  measurementId: "G-QJDR3V82NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Export storage

const analytics = getAnalytics(app); // You can keep analytics if needed