// import functions from firebase using npm
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
    sendPasswordResetEmail,
    updateProfile
} 
from "firebase/auth";

import { 
        getFirestore,
        doc,
        setDoc,
        updateDoc,
        getDoc
} 
from "firebase/firestore";

import { StudentInformation } from "../form/InformationClass";

// firebase configuration from the firebase console -> project settings -> general
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

// Initialize Firebase Firestore and get a reference to the service
const db = getFirestore(app);

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

/**
 * creates a new user with email and password
 * @param {string} email 
 * @param {string} password 
 * @param {Function} setErrorMessage 
 * @param {Function} setUser 
 */
export function newUser(email, password, userType, setErrorMessage, setUser) {

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

            if (userType === "Student") {

                setDoc(doc(db, "student", user.uid), {

                });

            } else if (userType === "Facility") {
                    
                setDoc(doc(db, "facility", user.uid), {
    
                });

            }
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

const studentInformationConverter = {
    toFirestore: (studentInformation) => {

        return {
            firstName: studentInformation.firstName,
            lastName: studentInformation.lastName,
            dateOfBirth: studentInformation.dateOfBirth,
            address: studentInformation.streetAddress,
            city: studentInformation.city,
            state: studentInformation.state,
            zipCode: studentInformation.zipCode,
            school: studentInformation.school,
            emergencyContactFirstName: studentInformation.emergencyContact.firstName,
            emergencyContactLastName: studentInformation.emergencyContact.lastName,
            emergencyContactPhoneNumber: studentInformation.emergencyContact.phoneNumber,
            emergencyContactEmail: studentInformation.emergencyContact.email,
            emergencyContactRelationship: studentInformation.emergencyContact.relationship,
        };    
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);

        const studentInfo = new StudentInformation(data.firstName,
                                                    data.lastName,
                                                    data.dateOfBirth,
                                                    data.email,
                                                    data.phoneNumber,
                                                    data.address,
                                                    data.city,
                                                    data.state,
                                                    data.zipCode,
                                                    data.school);
        
        const emergencyContact = new studentInfo.EmergencyContact(data.emergencyContactFirstName,
                                                                    data.emergencyContactLastName,
                                                                    data.emergencyContactPhoneNumber,
                                                                    data.emergencyContactEmail,
                                                                    data.emergencyContactRelationship);

        studentInfo.emergencyContact = emergencyContact;

        return studentInfo;

    }
}

export function studentRegistration(info) {
    const ref = doc(db, "student", auth.currentUser.uid);

    updateDoc(ref, studentInformationConverter.toFirestore(info));

    updateProfile(auth.currentUser, {displayName: info.firstName + " " + info.lastName});

}

export function getStudentInformation(setStudentInformation) {
    const ref = doc(db, "student", auth.currentUser.uid).withConverter(studentInformationConverter);
    getDoc(ref).then((doc) => {
        if (doc.exists()) {
            setStudentInformation(doc.data());
        } else {
            console.log("no such document");
        }
    }).catch((error) => {
        console.log(error);
    })
}

