
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinter-682d5.firebaseapp.com",
  projectId: "aiinter-682d5",
  storageBucket: "aiinter-682d5.firebasestorage.app",
  messagingSenderId: "93256725801",
  appId: "1:93256725801:web:490246c4da4ab775783338"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}