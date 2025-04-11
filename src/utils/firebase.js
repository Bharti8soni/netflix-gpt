// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOU4KGkBM5PVQzstBU1iqOIu-g_dqK1yQ",
  authDomain: "netflixgpt-1fe2d.firebaseapp.com",
  projectId: "netflixgpt-1fe2d",
  storageBucket: "netflixgpt-1fe2d.firebasestorage.app",
  messagingSenderId: "902244771370",
  appId: "1:902244771370:web:3b0e0ea536c219fd104553",
  measurementId: "G-ZLCQGE93PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {auth};