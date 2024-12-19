
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkGiJDfWx2cgnJz1MKspRrkhKSc1oVrLc",
  authDomain: "umera-ai.firebaseapp.com",
  projectId: "umera-ai",
  storageBucket: "umera-ai.firebasestorage.app",
  messagingSenderId: "166910922278",
  appId: "1:166910922278:web:8e0989ae26f6ffc18320e7",
  measurementId: "G-TQ621YC1T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const analytics = getAnalytics(app);