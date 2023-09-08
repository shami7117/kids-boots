// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPH_sP2M7ec4rzbpyTKc-m0OptQB5cc_A",
    authDomain: "kid-shoes.firebaseapp.com",
    projectId: "kid-shoes",
    storageBucket: "kid-shoes.appspot.com",
    messagingSenderId: "391570582000",
    appId: "1:391570582000:web:776af8bfa2b7f185fb9535",
    measurementId: "G-VSZHX7WJ4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore(app);
export const auth = getAuth(app);
