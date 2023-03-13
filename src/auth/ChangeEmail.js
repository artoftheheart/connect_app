import { useState } from "react";
import { changeEmail } from "../util/firebase";
import OpenEnded from "../util/OpenEnded";

const ChangeEmail = () => {

    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');

    return (  
        <div className="change-email">

            <h2>Change Email</h2>

            <OpenEnded question="Password:" setResponse={setPassword} type="password"/>

            <OpenEnded question="New Email:" setResponse={setNewEmail} type="email"/>

            <button onClick={() => changeEmail(password, newEmail)}>Change Email</button>

        </div>
    );
}
 
export default ChangeEmail;