import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvN-3KpKebDD6HZbvdZ2x7Jq9AIxsAtkg",
    authDomain: "crwn-db-cd180.firebaseapp.com",
    projectId: "crwn-db-cd180",
    storageBucket: "crwn-db-cd180.appspot.com",
    messagingSenderId: "338391393586",
    appId: "1:338391393586:web:c74bed4dee82ec827d232b" 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
