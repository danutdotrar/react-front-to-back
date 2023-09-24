// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlvn-lmoLxx2kEIXJSMuoA3wy70wXixWs",
    authDomain: "house-marketplace-app-42e20.firebaseapp.com",
    projectId: "house-marketplace-app-42e20",
    storageBucket: "house-marketplace-app-42e20.appspot.com",
    messagingSenderId: "277206965015",
    appId: "1:277206965015:web:b3d0b23864d7fa38c9b552",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
