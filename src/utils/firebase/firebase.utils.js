import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDf9-jdxY50_ezQk1rN8k7FA8IboAjhIlA",
  
    authDomain: "dinismcosta-11ee2.firebaseapp.com",
  
    projectId: "dinismcosta-11ee2",
  
    storageBucket: "dinismcosta-11ee2.appspot.com",
  
    messagingSenderId: "190021604088",
  
    appId: "1:190021604088:web:6a8fcbe83ea261383ba10d",
  
    measurementId: "G-QHBZY0E6QT"
  
  };
  
  
  // Initialize Firebase
  // eslint-disable-next-line
  const firebaseApp = initializeApp(firebaseConfig);
  
  // const firebaseAnalytics = getAnalytics(firebaseApp);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists())
    {
      const { displayName, email } = userAuth;

      const createdAt = new Date();

      try {
        await setDoc(userDocRef, { displayName, email, createdAt });
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }

    return userDocRef;
  }