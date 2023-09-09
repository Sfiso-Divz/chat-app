// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmvL4mYKX6hg53VTMQHfp6C6BDen17UdM",
  authDomain: "chat-ab57e.firebaseapp.com",
  projectId: "chat-ab57e",
  storageBucket: "chat-ab57e.appspot.com",
  messagingSenderId: "274806531004",
  appId: "1:274806531004:web:04a2166fd49983766501b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);