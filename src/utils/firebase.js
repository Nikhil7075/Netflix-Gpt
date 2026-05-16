// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-vNgXZeWOGIT4JFjcBzeaDwMbCFuvUWM",
  authDomain: "netflixgpt-81df6.firebaseapp.com",
  projectId: "netflixgpt-81df6",
  storageBucket: "netflixgpt-81df6.firebasestorage.app",
  messagingSenderId: "52968890346",
  appId: "1:52968890346:web:4f4e314b7253a275bb5c93",
  measurementId: "G-8QRDY9TGVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default firebaseConfig;
export {auth};