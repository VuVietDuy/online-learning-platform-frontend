import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkpL6JAZPDO4MuD957RflaUbTJW93brQQ",
  authDomain: "gdsc-hackathon-112e7.firebaseapp.com",
  projectId: "gdsc-hackathon-112e7",
  storageBucket: "gdsc-hackathon-112e7.appspot.com",
  messagingSenderId: "50342457448",
  appId: "1:50342457448:web:f7d4b3bcf7768241bc8bdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {
  auth,
  db
}