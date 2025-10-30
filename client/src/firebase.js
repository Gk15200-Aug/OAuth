// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA27tzgWnb5fYpOF5n0kRGzPvwhhD2UUU0",
  authDomain: "resturantdlv-d4c2b.firebaseapp.com",
  databaseURL: "https://resturantdlv-d4c2b-default-rtdb.firebaseio.com",
  projectId: "resturantdlv-d4c2b",
  storageBucket: "resturantdlv-d4c2b.appspot.com",
  messagingSenderId: "560920465934",
  appId: "1:560920465934:web:79e783317ee43c2601625f",
  measurementId: "G-H4WRVY7NM8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
