import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCswdRUc_uEYXCK_ME1zyWFQeAOkiNpe9M",
    authDomain: "cryptocampus-da224.firebaseapp.com",
    databaseURL: "https://cryptocampus-da224-default-rtdb.firebaseio.com",
    projectId: "cryptocampus-da224",
    storageBucket: "cryptocampus-da224.appspot.com",
    messagingSenderId: "349865497301",
    appId: "1:349865497301:web:5a84b0929133cee4a7885c",
    measurementId: "G-D801KMTXGT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const fs = getFirestore(app);
