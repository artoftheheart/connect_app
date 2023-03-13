import { useEffect, useState } from "react";
import { newUser } from "../util/firebase.js"
import MultipleChoice from "../util/MultipleChoice.js";
import OpenEnded from "../util/OpenEnded";

/*
user: amanda@artoftheheartmusic.org
password: password

user: hr@artoftheheartmusic.org
password: amanda

*/


const Signup = ({setUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match. Try again.")
        } else {
            setErrorMessage('');
        }
    }, [password, confirmPassword]);

    return (
        <div className="sign-up">
            
            <h2>Sign up</h2>

            <OpenEnded question="Email:" setResponse={setEmail} type="email"/>

            <OpenEnded question="Password:" setResponse={setPassword} type="password"/>

            <OpenEnded question="Confirm Password:" setResponse={setConfirmPassword} type="password"/>

            <MultipleChoice question="User Type:" options={["Student", "Facility"]} setResponse={setUserType}/>

            <MultipleChoice question="" options={["I accept the terms and conditions."]} type="checkbox" setResponse={setCheckbox}/>

            <br/>

            <button 
                onClick={() => newUser(email, password, userType, setErrorMessage, setUser)} 
                disabled={!(checkbox)}
            >Sign Up</button>

            <div className="error-message"> {errorMessage} </div>

        </div>
    );
}
 
export default Signup;