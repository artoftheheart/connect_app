import { useState } from "react";
import { newUser } from "../firebase.js"

/*
user: amanda@artoftheheartmusic.org
password: password

user: hr@artoftheheartmusic.org
password: amanda

*/


const Signup = ({setUser}) => {

    const [email, setEmail] = useState('');
    const emailChange = (event) => {
        setEmail(event.target.value);
        //console.log(email);
    }

    const [password, setPassword] = useState('');
    const passwordChange = (event) => {
        setPassword(event.target.value);
        //console.log(password);

        if (event.target.value === confirmPassword) {
            setErrorMessage('');
        }
    }

    const [confirmPassword, setConfirmPassword] = useState('');
    const confirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);

        if (event.target.value !== password){
            setErrorMessage("Passwords don't match. Try again.")
        } else {
            setErrorMessage('');
        }

    } 

    const [errorMessage, setErrorMessage] = useState('');


    return (
        <div className="sign-up">
            
            <h2>Sign up</h2>
            
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email-sign-up" onChange={emailChange}/>

            <br/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password-sign-up" onChange={passwordChange}/>

            <br/>

            <label htmlFor="password-confirm">Confirm Password:</label>
            <input type="password" name="password-confirm" id="password-confirm-sign-up" onChange={confirmPasswordChange}/>

            <br/>

            <label htmlFor="sign-up-checkbox">I accept the terms and conditions.</label>
            <input type="checkbox" name="sign-up-checkbox" id="sign-up-checkbox"/>

            <br/>

            <button 
                onClick={() => newUser(email, password, setErrorMessage, setUser)} 
                //disabled={errorMessage===''|| email==='' || password==='' || !(document.getElementById("sign-up-checkbox").checked)}>
            >Sign Up</button>

            <div className="error-message"> {errorMessage} </div>

        </div>
    );
}
 
export default Signup;