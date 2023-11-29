import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkt4iNCy4N6x8gVBhwe6xAQNIJLx1DS4s",
  authDomain: "fithub-5cfac.firebaseapp.com",
  projectId: "fithub-5cfac",
  storageBucket: "fithub-5cfac.appspot.com",
  messagingSenderId: "603931510297",
  appId: "1:603931510297:web:dc6eb0b552ac6efd6ccc88"
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
