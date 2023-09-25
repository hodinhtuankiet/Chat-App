// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage function for Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyAYTbvxl6_OTBTEda-5akDVBpomIyJh4PQ",
  authDomain: "chat-app-5f6c1.firebaseapp.com",
  projectId: "chat-app-5f6c1",
  storageBucket: "chat-app-5f6c1.appspot.com",
  messagingSenderId: "521508415051",
  appId: "1:521508415051:web:fb391349615a2472908fce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app); // Export the Storage instance

// You can also export other Firebase services if needed
// export const messaging = getMessaging(app);
