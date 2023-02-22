import { useState } from "react";
import { resetPassword } from "./firebase";

const PasswordResetEmail = () => {
    
    const [email, setEmail] = useState('');
    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    return ( 
        <div className="password-reset-email">

            <h2>Reset Password</h2>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email-reset-password" onChange={emailChange}/>

            <br/>

            <button onClick={() => resetPassword(email)}>Send Password Reset Email</button>

        </div>
     );
}
 
export default PasswordResetEmail;