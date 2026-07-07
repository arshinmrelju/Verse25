import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCbuwdInoxFvXw9jqwso33thSfbpUJekws",
  authDomain: "jyprcini.firebaseapp.com",
  databaseURL: "https://jyprcini-default-rtdb.firebaseio.com",
  projectId: "jyprcini",
  storageBucket: "jyprcini.firebasestorage.app",
  messagingSenderId: "484096616943",
  appId: "1:484096616943:web:6195460527a631c2deae1a",
  measurementId: "G-LRFEVLES69"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()

export { signInAnonymously, signInWithPopup, signOut }
