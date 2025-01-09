// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYuO3W_i5q2b7Zd044G3PCrp9X1XkDlBo",
    authDomain: "exam-8d57c.firebaseapp.com",
    projectId: "exam-8d57c",
    storageBucket: "exam-8d57c.firebasestorage.app",
    messagingSenderId: "617443658838",
    appId: "1:617443658838:web:785cc76791f75c9d5c3ff7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
