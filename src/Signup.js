import { useState } from "react";
import { newUser } from "./firebase.js"

/*
user: amanda@artoftheheartmusic.org
password: password

user: hr@artoftheheartmusic.org
password: amanda

*/


const Signup = () => {

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

    return (
        <div className="sign-up">
            
            <h2>Sign up</h2>
            
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" onChange={emailChange}/>

            <br/>

            <label for="password">Password:</label>
            <input type="password" name="password" id="password" onChange={passwordChange}/>

            <button onClick={() => newUser(email, password)}>Click</button>

        </div>
    );
}
 
export default Signup;