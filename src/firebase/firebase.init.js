// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9WIbgu1pcIpGwwKem3EMFUykpHv-3GUw",
  authDomain: "treeplant-care-app.firebaseapp.com",
  projectId: "treeplant-care-app",
  storageBucket: "treeplant-care-app.firebasestorage.app",
  messagingSenderId: "392507817242",
  appId: "1:392507817242:web:32db125a36541d6ce500a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initial 
export  const auth=getAuth(app);