import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBSl10xz7it0hDkzGpT8CHFvyTaWbQNvLw",
  authDomain: "hirexprep.firebaseapp.com",
  projectId: "hirexprep",
  storageBucket: "hirexprep.appspot.com",
  messagingSenderId: "274774325676",
  appId: "1:274774325676:web:dff4a2588c2df7faa06209",
  measurementId: "G-3P0NVY5CEW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
