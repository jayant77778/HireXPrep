import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAbS1ECiOUYSWeEcN5koSZEXKHsDuA2GFk",
  authDomain: "hirexprep-3dbd0.firebaseapp.com",
  projectId: "hirexprep-3dbd0",
  storageBucket: "hirexprep-3dbd0.appspot.com",
  messagingSenderId: "771781400819",
  appId: "1:771781400819:web:233b66028dcbe39ca8ff86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
