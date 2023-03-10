import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey : process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain : process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId : process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket : process.env.REACT_APP_FIREBASE_STROAGE_BUCKET,
  messagingSenderId : process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId : process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId : process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 객체 저장
export const db = getFirestore(app);