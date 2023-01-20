import {initializeApp} from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWS-h0cKDmtP-df_xPBoSPheLjTvYIs0M",
  authDomain: "me-shop-db.firebaseapp.com",
  projectId: "me-shop-db",
  storageBucket: "me-shop-db.appspot.com",
  messagingSenderId: "642336604811",
  appId: "1:642336604811:web:ffb1355b1c39a70f1e8a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters();

export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);

export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth=async(userAuth,additionalInformation={displayName: ''})=>{
  if(!userAuth) return;

  const userDocRef=doc(db,'users',userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email}= userAuth;
    const createdAt= new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error){
      console.log('error creating the usr', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

