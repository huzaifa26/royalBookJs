import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBwAeWFafR9yiZLGW8x6cmskhmL_KGluhY",
//   authDomain: "royalbook-42672.firebaseapp.com",
//   projectId: "royalbook-42672",
//   storageBucket: "royalbook-42672.appspot.com",
//   messagingSenderId: "166399863349",
//   appId: "1:166399863349:web:8817f4c7dea325b07f1f7c"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC7QLVzPp3nVY4uo2d4BwX1uHDwjnksxe8",
  authDomain: "royal-app-f5ef9.firebaseapp.com",
  databaseURL: "https://royal-app-f5ef9.firebaseio.com",
  projectId: "royal-app-f5ef9",
  storageBucket: "royal-app-f5ef9.appspot.com",
  messagingSenderId: "761501435929",
  appId: "1:761501435929:web:e65f4b020da9bfc7c3c288",
  measurementId: "G-G4D04SL5FS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };