import { useState } from "react";
import { changePassword } from "../firebase";

const ChangePassword = () => {

    const [passwordCurrent, setPasswordCurrent] = useState('');
    const passwordCurrentChange = (event) => {
        setPasswordCurrent(event.target.value);
    }

    const [passwordNew, setPasswordNew] = useState('');
    const passwordNewChange = (event) => {
        setPasswordNew(event.target.value);
        //console.log(passwordNew, passwordNewConfirm);

        if (event.target.value === passwordNewConfirm) {
            setErrorMessage("");
        }
    }

    const [passwordNewConfirm, setPasswordNewConfirm] = useState('');
    const passwordNewConfirmChange = (event) => {
        setPasswordNewConfirm(event.target.value);
        //console.log(passwordNew, event.target.value, passwordNewConfirm);

        if (passwordNew !== event.target.value) {
            setErrorMessage("New passwords do not match, please double check and try again");
            //console.log(passwordNew);
            //console.log(passwordNewConfirm);
        } else {
            setErrorMessage("");
        }
    }

    const [errorMessage, setErrorMessage] = useState('');

    return ( 
        <div className="change-password">
            <h2>Change Password</h2>

            <label htmlFor="password-current">Current Password:</label>
            <input type="password" name="password-current" id="password-change-current" onChange={passwordCurrentChange}/>

            <br/>

            <label htmlFor="password-new">New Password:</label>
            <input type="password" name="password-new" id="password-change-new" onChange={passwordNewChange}/>

            <br/>

            <label htmlFor="password-new-confirm">Confirm New Password:</label>
            <input type="password" name="password-new-confirm" id="password-change-new-confirm" onChange={passwordNewConfirmChange}/>

            <br/>

            <button onClick={() => changePassword(passwordCurrent, passwordNew)}>Change Password</button>

            <div className="error-message"> {errorMessage} </div>

        </div>
     );
}
 
export default ChangePassword;