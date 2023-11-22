// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9nQbYy0aEcKXPo2Ce0f_tT7jzc1kOU2Y",
  authDomain: "flix-gpt-c6062.firebaseapp.com",
  projectId: "flix-gpt-c6062",
  storageBucket: "flix-gpt-c6062.appspot.com",
  messagingSenderId: "798201315948",
  appId: "1:798201315948:web:3a4e6e74c284c630b08e49",
  measurementId: "G-SXF4C4BYKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
