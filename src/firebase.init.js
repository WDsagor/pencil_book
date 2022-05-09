// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAYCmz95wcOMNo8la3bxgkEVZwN47mpkIU",
  authDomain:"stotionery-inventory.firebaseapp.com",
  projectId:"stotionery-inventory",
  storageBucket:"stotionery-inventory.appspot.com",
  messagingSenderId:"291967181167",
  appId:"1:291967181167:web:4e59082c068c8b2e8ac89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
