import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCl3ucLwm_J3N7ZJMQVtqJ2brvGYho60-U",
  authDomain: "d-livery-c8eef.firebaseapp.com",
  projectId: "d-livery-c8eef",
  storageBucket: "d-livery-c8eef.appspot.com",
  messagingSenderId: "774911850841",
  appId: "1:774911850841:web:4ef5fd2783e876ae1d3448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };