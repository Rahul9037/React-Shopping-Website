import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const congif = {
    apiKey: "AIzaSyCoS494Jg7CFCjHcBz514eFwsD8bY-vkho",
    authDomain: "shoppingwebsitereact.firebaseapp.com",
    databaseURL: "https://shoppingwebsitereact.firebaseio.com",
    projectId: "shoppingwebsitereact",
    storageBucket: "shoppingwebsitereact.appspot.com",
    messagingSenderId: "238779094048",
    appId: "1:238779094048:web:992330f6ec44b21ac79845",
    measurementId: "G-RG3KE9W4CJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) 
    {return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email, phoneNumber } = userAuth
        const createdAt = new Date();
        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    phoneNumber,
                    createdAt,
                    ...additionalData
                }
            )

        }
        catch(error)
        {
            console.log("error creating user",error.message);
        }
    }

    return userRef;

}


firebase.initializeApp(congif);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;