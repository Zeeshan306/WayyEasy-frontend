import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFBLzHD7ZKI3IhERn8GzbbD4DF4NWShqY",
  authDomain: "wayyeasy-57ee1.firebaseapp.com",
  projectId: "wayyeasy-57ee1",
  storageBucket: "wayyeasy-57ee1.appspot.com",
  messagingSenderId: "831468844179",
  appId: "1:831468844179:web:facf0288d99756f1334966",
  measurementId: "G-5M1SXKQFNY",
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(firebaseApp);
