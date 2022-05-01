// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs9HYS4Qtf4CZINIY1FN9emBMp2ZqLAXY",
  authDomain: "stationery-invetory.firebaseapp.com",
  projectId: "stationery-invetory",
  storageBucket: "stationery-invetory.appspot.com",
  messagingSenderId: "66496941584",
  appId: "1:66496941584:web:ec1daa6b0f830a0d878495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;