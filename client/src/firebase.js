// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCyfiISWGwjl8KMrRax4YecLvib_l8TMGU",

  authDomain: "supersaga-landing-page.firebaseapp.com",

  projectId: "supersaga-landing-page",

  storageBucket: "supersaga-landing-page.appspot.com",

  messagingSenderId: "444071058243",

  appId: "1:444071058243:web:b3b4f4cb4db2bf68566df6",

  measurementId: "G-QW3WE2S630"

};



// Initialize Firebase


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
    auth,
    db,
}

//npm install -g firebase-tools


