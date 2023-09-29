// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage function for Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyBRGXPFSpNvZhH_aoqUrKQYmynY2p-as9o",
  authDomain: "chat-20124.firebaseapp.com",
  projectId: "chat-20124",
  storageBucket: "chat-20124.appspot.com",
  messagingSenderId: "541002788232",
  appId: "1:541002788232:web:e84063b2de1138aa7f9e3d"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app); // Export the Storage instance

// You can also export other Firebase services if needed
// export const messaging = getMessaging(app);
