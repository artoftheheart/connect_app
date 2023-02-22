/*

npm run build
npm run start
firebase deploy
firebase emulators:start

 */


import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import PasswordResetEmail from "./PasswordResetEmail";
import Signin from "./Signin";
import Signout from "./Signout";
import Signup from "./Signup";

//import logo from './logo.svg';
//import './App.css';


function App() {
  return (
    <div className="App">
      <Signup />
      <Signin />
      <Signout />
      <ChangePassword />
      <ChangeEmail />
      <PasswordResetEmail /> 
    </div>
  );
}

export default App;
