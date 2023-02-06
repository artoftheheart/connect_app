// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);