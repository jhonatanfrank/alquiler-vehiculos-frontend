// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQC6_045NAGE4KjXRFxkPniu5zXUsx97E",
  authDomain: "alquiler-vehiculos-8f6fd.firebaseapp.com",
  projectId: "alquiler-vehiculos-8f6fd",
  storageBucket: "alquiler-vehiculos-8f6fd.appspot.com",
  messagingSenderId: "391501237493",
  appId: "1:391501237493:web:feea7a46e0f2edca46c9bc",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
