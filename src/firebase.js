import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    sendEmailVerification,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    updateEmail,
    sendPasswordResetEmail
} 
from "firebase/auth";

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

// possible error messages to be displayed to the user.
const possibleErrorMessages = {
    "auth/email-already-in-use": "Email already in use. Please use another email, or sign in instead.",
    "auth/user-not-found": "User not found. Try signing up instead.",
    "auth/invalid-email": "Invalid email. Please use another email.",
    "auth/missing-email": "Please enter an email.",
    "auth/internal-error": "There was an error. Please check your email and password and try again.",
    "auth/weak-password": "Password should be at least 6 characters long. Please use a stronger password.",
    "auth/wrong-password": "Wrong password. Please try again.",
};

export function newUser(email, password, setErrorMessage, setUser) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // Signed in 
            //console.log(email, password);
            
            const user = userCredential.user;
            //console.log(user);
            setUser(user.email);

            sendEmailVerification(auth.currentUser)
                .then(() => {
                    //console.log("sent")
                    // Email verification sent!

                    setErrorMessage("Please verify your email by clicking the link in the email sent to your inbox.")
                });

        })
        .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;

            setErrorMessage(possibleErrorMessages[errorCode]);
            
            //console.log(errorCode, errorMessage);

        });
};

export function logIn(email, password, setErrorMessage, setUser){

    //console.log(password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            //console.log(user);
            setUser(user.email);

        })
        .catch((error) => {
            
            const errorCode = error.code;
            //const errorMessage = error.message;

            setErrorMessage(possibleErrorMessages[errorCode]);
            
            //console.log(errorCode, errorMessage);
        })

}

export function logOut (setUser) {
    signOut(auth).then(()=> {
        //console.log("signed out");
        setUser("none");

    }).catch((error) => {
        console.log(error);
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      //const uid = user.uid;

      

    } else {
      // User is signed out

    }
});

export function changePassword (currentPassword, newPassword) {
    const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
    )

    reauthenticateWithCredential(auth.currentUser, credential);

    updatePassword(auth.currentUser, newPassword).then(() => {
        console.log("password changed", newPassword);
    }).catch((error) => {
        console.log(error);
    });
}

export function changeEmail (currentPassword, newEmail) {

    const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
    )

    reauthenticateWithCredential(auth.currentUser, credential);

    updateEmail(auth.currentUser, newEmail).then(() => {
        console.log("email changed", newEmail);
    }).catch((error) => {
        console.log(error);
    })

}

export function resetPassword (email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        console.log("password reset email sent");
    }).catch((error) => {
        console.log(error); 
    })
}