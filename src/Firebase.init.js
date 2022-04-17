// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpHCcQ79CrzuI9seeQlvSg0XvzfcCXC3g",
  authDomain: "annaba-project.firebaseapp.com",
  projectId: "annaba-project",
  storageBucket: "annaba-project.appspot.com",
  messagingSenderId: "451217416438",
  appId: "1:451217416438:web:27b00e2467d49bca730cd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;