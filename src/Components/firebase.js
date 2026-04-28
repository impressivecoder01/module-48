// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAICTbihP6nuh_SeGGcu4ukBIik5BuXfXw",
  authDomain: "module-48-f7676.firebaseapp.com",
  projectId: "module-48-f7676",
  storageBucket: "module-48-f7676.firebasestorage.app",
  messagingSenderId: "858789483509",
  appId: "1:858789483509:web:78be96b205d62c9d70c6bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
