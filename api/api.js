// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnWwFnirDcoGq1eNzXarl-4rGWBHoNyCk",
  authDomain: "wellnow-3b505.firebaseapp.com",
  projectId: "wellnow-3b505",
  storageBucket: "wellnow-3b505.appspot.com",
  messagingSenderId: "153077082538",
  appId: "1:153077082538:web:52b94345613bf006ffe3d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;