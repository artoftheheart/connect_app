import { useState } from "react";
import { resetPassword } from "../util/firebase";
import OpenEnded from "../util/OpenEnded";

const PasswordResetEmail = () => {
    
    const [email, setEmail] = useState('');

    return ( 
        <div className="password-reset-email">

            <h2>Reset Password</h2>

            <OpenEnded question="Email:" setResponse={setEmail} type="email"/>
            
            <button onClick={() => resetPassword(email)}>Send Password Reset Email</button>

        </div>
     );
}
 
export default PasswordResetEmail;