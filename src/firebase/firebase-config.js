import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJavZR-RcK8P9OzzPiN9KzKdzdXW50_KY",
    authDomain: "curso-react-8680a.firebaseapp.com",
    projectId: "curso-react-8680a",
    storageBucket: "curso-react-8680a.appspot.com",
    messagingSenderId: "408781656778",
    appId: "1:408781656778:web:5eaa301b346d96bc321a33"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore( app );
const auth = getAuth( app );

const google = new GoogleAuthProvider();


export { 
  db, 
  auth, 
  google, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged 
}
