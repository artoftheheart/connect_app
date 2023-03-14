/*

npm run build
npm run start
firebase deploy
firebase emulators:start
firebase hosting:channel:deploy CHANNEL_ID

 */

import { useState } from "react";
import { useRoutes }from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PasswordResetEmail from "./auth/PasswordResetEmail";
import StudentRegistrationPage from "./pages/StudentRegistrationPage";

//import logo from './logo.svg';
//import './App.css';


function App() {

  const [user, setUser] = useState("none");

  let element = useRoutes([
    {
      path: "/",
      element: <HomePage user={user}/>,
      children: [
        { path: "/index", element: <HomePage user={user}/> },
        { path: "/home", element: <HomePage user={user}/> },
      ]
    }, 
    {
      path: "*",
      element: <ErrorPage/>

    }, 
    {
      path: "/sign_in",
      element: <SignInPage user={user} setUser={setUser}/>
    },
    {
      path: "/sign_up",
      element: <SignUpPage user={user} setUser={setUser}/>
    },

    {
      path: "/student_registration",
      element: <StudentRegistrationPage user={user} />
    },

    {
      path: "/reset_password",
      element: <PasswordResetEmail />
    }
    

  ]);

  return element;
/**
  <CurrentUser user={user}/>
  <Signup setUser={setUser}/>
  <Signin setUser={setUser}/>
  <Signout setUser={setUser}/>
  <ChangePassword />
  <ChangeEmail />
  <PasswordResetEmail /> 
  <StudentRegistration />
   */
}

export default App;
