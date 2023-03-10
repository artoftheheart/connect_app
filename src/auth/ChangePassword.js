import { useEffect, useState } from "react";
import { changePassword } from "../firebase";
import OpenEnded from "../util/OpenEnded";

const ChangePassword = () => {

    const [passwordCurrent, setPasswordCurrent] = useState('');
    const [passwordNew, setPasswordNew] = useState('');
    const [passwordNewConfirm, setPasswordNewConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (passwordNew !== passwordNewConfirm) {
            setErrorMessage("New passwords do not match, please double check and try again");
        } else {
            setErrorMessage("");
        }
    }, [passwordNew, passwordNewConfirm]);

    return ( 
        <div className="change-password">
            <h2>Change Password</h2>

            <OpenEnded question="Current Password" type="password" setResponse={setPasswordCurrent}/>
            <OpenEnded question="New Password" type="password" setResponse={setPasswordNew}/>
            <OpenEnded question="Confirm New Password" type="password" setResponse={setPasswordNewConfirm}/>

            <button onClick={() => changePassword(passwordCurrent, passwordNew)}>Change Password</button>

            <div className="error-message"> {errorMessage} </div>

        </div>
     );
}
 
export default ChangePassword;