// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAg3HpeSeICXbF5_YnDbYd52g_dykopNtc",
    authDomain: "react-links-2718a.firebaseapp.com",
    projectId: "react-links-2718a",
    storageBucket: "react-links-2718a.firebasestorage.app",
    messagingSenderId: "1010308808787",
    appId: "1:1010308808787:web:a1096e58dab53b4e5086a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };