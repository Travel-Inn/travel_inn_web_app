import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyBESqOWbc5mpsJHB7DE-isPZsaogIFFu0k",
  authDomain: "travel-inn-e9999.firebaseapp.com",
  projectId: "travel-inn-e9999",
  storageBucket: "travel-inn-e9999.appspot.com",
  messagingSenderId: "208360428593",
  appId: "1:208360428593:web:2b26c52249d0994466b110",
  measurementId: "G-TRXZ6EG974"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export  { firebaseApp, db};