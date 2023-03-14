import { useState } from "react";
import { logIn } from "../util/firebase";
import OpenEnded from "../util/OpenEnded";
import { useNavigate } from "react-router-dom";

const Signin = ({setUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    return ( 
        <div className="sign-in">
                
            <h2>Sign in</h2>
            
            <OpenEnded question="Email:" setResponse={setEmail} type="email"/>
            <OpenEnded question="Password:" setResponse={setPassword} type="password"/>
            
            <button onClick={() => {
                logIn(email, password, setErrorMessage, setUser); 
                navigate("../");
            }}>Sign In</button>

            <div className="error-message"> {errorMessage} </div>

        </div> 
    );
}
 
export default Signin;