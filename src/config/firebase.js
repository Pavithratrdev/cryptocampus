import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDm0cr-dDOdWF3W6H6QpDQzEoNjHJ_jUcw",
    authDomain: "crypto-d34e6.firebaseapp.com",
    databaseURL: "https://crypto-d34e6-default-rtdb.firebaseio.com",
    projectId: "crypto-d34e6",
    storageBucket: "crypto-d34e6.appspot.com",
    messagingSenderId: "933853381609",
    appId: "1:933853381609:web:c865b84fa7f92d4fa60178",
    measurementId: "G-YN8B780PTE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const fs = getFirestore(app);
