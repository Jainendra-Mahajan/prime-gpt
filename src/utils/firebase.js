// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnKnF1OyQamC0ArHQKS-a025GHVWE9Whw",
    authDomain: "prime-gpt-89dc3.firebaseapp.com",
    projectId: "prime-gpt-89dc3",
    storageBucket: "prime-gpt-89dc3.firebasestorage.app",
    messagingSenderId: "1094615961460",
    appId: "1:1094615961460:web:9978e8f8cdd98721afa621",
    measurementId: "G-MW6HG4PDWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();