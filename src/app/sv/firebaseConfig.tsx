'use client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnNoor0qDY2mzkv0ZCg4dwIGjiN3DIrow",
  authDomain: "test-67dd1.firebaseapp.com",
  projectId: "test-67dd1",
  storageBucket: "test-67dd1.firebasestorage.app",
  messagingSenderId: "649140819609",
  appId: "1:649140819609:web:36c8637d1b4dce17edca08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app