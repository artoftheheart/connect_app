import { useState } from "react";
import { logIn } from "../util/firebase";
import OpenEnded from "../util/OpenEnded";

const Signin = ({setUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return ( 
        <div className="sign-in">
                
            <h2>Sign in</h2>
            
            <OpenEnded question="Email:" setResponse={setEmail} type="email"/>
            <OpenEnded question="Password:" setResponse={setPassword} type="password"/>
            
            <button onClick={() => logIn(email, password, setErrorMessage, setUser)}>Sign In</button>

            <div className="error-message"> {errorMessage} </div>

        </div> 
    );
}
 
export default Signin;