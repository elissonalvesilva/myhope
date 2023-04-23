import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase

const app = initializeApp ({
  apiKey: process.env.REACT_APP_FIREABASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;