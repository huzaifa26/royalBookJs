import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwAeWFafR9yiZLGW8x6cmskhmL_KGluhY",
  authDomain: "royalbook-42672.firebaseapp.com",
  projectId: "royalbook-42672",
  storageBucket: "royalbook-42672.appspot.com",
  messagingSenderId: "166399863349",
  appId: "1:166399863349:web:8817f4c7dea325b07f1f7c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };