import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB3kN6M5C3jAnAeuYAIl3svXc8Nl3kuHBU",
  authDomain: "olx-clone-90395.firebaseapp.com",
  projectId: "olx-clone-90395",
  storageBucket: "olx-clone-90395.firebasestorage.app",
  messagingSenderId: "716324040597",
  appId: "1:716324040597:web:b0bfd7c3bbb2d54c74509c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()