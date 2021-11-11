import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCgHdYvPyrM6_nJZEdAKieb5c7DZQdnA64",
    authDomain: "crwn-clothing-c1c53.firebaseapp.com",
    projectId: "crwn-clothing-c1c53",
    storageBucket: "crwn-clothing-c1c53.appspot.com",
    messagingSenderId: "181910777186",
    appId: "1:181910777186:web:1226c7b8159d276a99103b"
}
//initialize firebase
firebase.initializeApp(config);
//async funtion to auth user with firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
