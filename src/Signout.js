import { logOut } from "./firebase";

const Signout = () => {
    return ( 

        <div className="sign-out">
            
            <h2>Sign Out</h2>

            <button onClick={() => logOut()}>Sign out</button>

        </div>
     );
}
 
export default Signout;