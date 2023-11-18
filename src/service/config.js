import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auris--partituras.firebaseapp.com",
  projectId: "auris--partituras",
  storageBucket: "auris--partituras.appspot.com",
  messagingSenderId: "538175088476",
  appId: "1:538175088476:web:7def0d854df2293bb88399"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);