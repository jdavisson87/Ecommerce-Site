import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDdQruw7OFLtPN2G_ccrpJbqc0M28d9g-U",
  authDomain: "ecommerce-ade64.firebaseapp.com",
  databaseURL: "https://ecommerce-ade64.firebaseio.com",
  projectId: "ecommerce-ade64",
  storageBucket: "ecommerce-ade64.appspot.com",
  messagingSenderId: "389008601963",
  appId: "1:389008601963:web:3be7f6fd1d766ce68f922e",
  measurementId: "G-CTEQ3WRGJB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;