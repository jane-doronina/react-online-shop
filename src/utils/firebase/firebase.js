import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOS_NBcHkDIytFmOkJC-5KyAJQMXv6sWA",
  authDomain: "online-shop-727cf.firebaseapp.com",
  projectId: "online-shop-727cf",
  storageBucket: "online-shop-727cf.appspot.com",
  messagingSenderId: "865656051723",
  appId: "1:865656051723:web:5ef923bf6361014d8e0f0e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
