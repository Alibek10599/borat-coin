// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCuxDa4kSp8FdrPuGCHfie6aTO3jf7x4E8",
    authDomain: "borat-coin.firebaseapp.com",
    projectId: "borat-coin",
    storageBucket: "borat-coin.appspot.com",
    messagingSenderId: "580084673431",
    appId: "1:580084673431:web:2c1a11eed1be156d57f2d2",
    measurementId: "G-2VHWV6PP8K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
