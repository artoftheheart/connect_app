/*

npm run build
npm run start
firebase deploy
firebase emulators:start
firebase hosting:channel:deploy CHANNEL_ID

 */


import ChangeEmail from "./auth/ChangeEmail";
import ChangePassword from "./auth/ChangePassword";
import PasswordResetEmail from "./auth/PasswordResetEmail";
import Signin from "./auth/Signin";
import Signout from "./auth/Signout";
import Signup from "./auth/Signup";
import { useState } from "react";
import CurrentUser from "./auth/CurrentUser";
import StudentRegistration from "./form/StudentRegistration";

//import logo from './logo.svg';
//import './App.css';


function App() {

  const [user, setUser] = useState("none");


  return (
    <div className="App">
      <CurrentUser user={user}/>
      <Signup setUser={setUser}/>
      <Signin setUser={setUser}/>
      <Signout setUser={setUser}/>
      <ChangePassword />
      <ChangeEmail />
      <PasswordResetEmail /> 
      <StudentRegistration />
    </div>
  );
}

export default App;
