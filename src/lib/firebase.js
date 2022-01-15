import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAu0uXd0mFQWZjShNLN3O1rrgb9DG3k2Qw",
    authDomain: "metaagram.firebaseapp.com",
    projectId: "metaagram",
    storageBucket: "metaagram.appspot.com",
    messagingSenderId: "642956924552",
    appId: "1:642956924552:web:eeb44ca730fd8bf220713d"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue};