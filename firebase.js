// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm-8hhKbZL2CBa92oPj4Ud5z99ZxUcaMM",
  authDomain: "web-hosting-37de8.firebaseapp.com",
  projectId: "web-hosting-37de8",
  storageBucket: "web-hosting-37de8.appspot.com",
  messagingSenderId: "880238518119",
  appId: "1:880238518119:web:5a025af0d3c0c4719a19c2",
  measurementId: "G-1FGENC9DL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
