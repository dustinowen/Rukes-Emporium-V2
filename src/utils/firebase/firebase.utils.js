import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEjZ4V7Uk4IH3KvaFOd28u75FTiiSzLTM",
  authDomain: "rukes-emporium-v2.firebaseapp.com",
  projectId: "rukes-emporium-v2",
  storageBucket: "rukes-emporium-v2.appspot.com",
  messagingSenderId: "646852155609",
  appId: "1:646852155609:web:176c456cbb1624f5f106c8",
  measurementId: "G-EMWZERNTQR",
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
}