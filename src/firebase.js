import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCg8KffZwXeQkq_TBBCqT6jT58Zi5utAro",
    authDomain: "connect-app-87d8b.firebaseapp.com",
    projectId: "connect-app-87d8b",
    storageBucket: "connect-app-87d8b.appspot.com",
    messagingSenderId: "935095193160",
    appId: "1:935095193160:web:6d29457141a0374308927d",
    measurementId: "G-M4JEN1R9Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export function newUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(email, password);
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
}
