import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBogeflGUF7xUYnVpsJ8KMxs4Lv7LK8xAo",
    authDomain: "linkedin-clone-guneet.firebaseapp.com",
    projectId: "linkedin-clone-guneet",
    storageBucket: "linkedin-clone-guneet.appspot.com",
    messagingSenderId: "373309197756",
    appId: "1:373309197756:web:d4fa3e19d5ae8e77632fb9"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db