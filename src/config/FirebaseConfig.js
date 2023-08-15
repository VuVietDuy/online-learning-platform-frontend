import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2X5IpWAI_5jBwJimJ2rGupD3jnR7XSFg",
  authDomain: "gdsc-hackathon-2c49d.firebaseapp.com",
  projectId: "gdsc-hackathon-2c49d",
  storageBucket: "gdsc-hackathon-2c49d.appspot.com",
  messagingSenderId: "1609259654",
  appId: "1:1609259654:web:c02a50a5740afc862b4f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {
  auth
}