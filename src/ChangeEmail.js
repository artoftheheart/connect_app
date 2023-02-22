import { useState } from "react";
import { changeEmail } from "./firebase";

const ChangeEmail = () => {

    const [password, setPassword] = useState('');
    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const [newEmail, setNewEmail] = useState('');
    const newEmailChange = (event) => {
        setNewEmail(event.target.value);
    }


    return (  
        <div className="change-email">

            <h2>Change Email</h2>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password-email-change" onChange={passwordChange}/>

            <br/>

            <label htmlFor="new-email">New Email:</label>
            <input type="email" name="new-email" id="email-change" onChange={newEmailChange} />

            <br/> 

            <button onClick={() => changeEmail(password, newEmail)}>Change Email</button>

        </div>
    );
}
 
export default ChangeEmail;