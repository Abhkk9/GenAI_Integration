// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4wKPD66Q6pwuS89zpf7iyN5Xil8wWzdw",
  authDomain: "netflix-4aa4a.firebaseapp.com",
  projectId: "netflix-4aa4a",
  storageBucket: "netflix-4aa4a.firebasestorage.app",
  messagingSenderId: "706258253632",
  appId: "1:706258253632:web:025aeea659c54ab5886ca5",
  measurementId: "G-3B6ZYXGVZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();