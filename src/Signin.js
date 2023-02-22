import { useState } from "react";
import { logIn } from "./firebase";

const Signin = () => {

    const [email, setEmail] = useState('');
    const emailChange = (event) => {
        setEmail(event.target.value);
        //console.log(email);
    }

    const [password, setPassword] = useState('');
    const passwordChange = (event) => {
        setPassword(event.target.value);
        //console.log(password);
    }

    const [errorMessage, setErrorMessage] = useState('');

    return ( 
        <div className="sign-in">
                
            <h2>Sign in</h2>
            
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email-sign-in" onChange={emailChange}/>

            <br/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password-sign-in" onChange={passwordChange}/>

            <br/>

            <button onClick={() => logIn(email, password, setErrorMessage)}>Sign In</button>

            <div className="error-message"> {errorMessage} </div>

        </div> 
    );
}
 
export default Signin;