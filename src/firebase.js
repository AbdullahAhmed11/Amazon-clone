import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzYOIo4Kboy7dp7Dnvo2yZiRd5bTLmRbU",
  authDomain: "react-b3c65.firebaseapp.com",
  projectId: "react-b3c65",
  storageBucket: "react-b3c65.appspot.com",
  messagingSenderId: "984451357021",
  appId: "1:984451357021:web:99350e3f4f17f0a13030b4",
  measurementId: "G-5ZZNK4P9F3",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
