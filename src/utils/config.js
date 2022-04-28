// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs6cE1HuStvJssmwcUahEpDqthJuZeA-s",
  authDomain: "travel-inn-1642d.firebaseapp.com",
  projectId: "travel-inn-1642d",
  storageBucket: "travel-inn-1642d.appspot.com",
  messagingSenderId: "524982245338",
  appId: "1:524982245338:web:80a455d0bbe03c238ed2e3",
  measurementId: "G-KXPM11QKS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}