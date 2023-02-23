import { logOut } from "../firebase";

const Signout = ({setUser}) => {
    return ( 

        <div className="sign-out">
            
            <h2>Sign Out</h2>

            <button onClick={() => logOut(setUser)}>Sign out</button>

        </div>
     );
}
 
export default Signout;