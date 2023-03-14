import Signup from "../auth/Signup";
import CurrentUser from "../auth/CurrentUser";
import { Link } from "react-router-dom";

const SignUpPage = ({user, setUser}) => {
    return ( 
        <div className="sign-up-page">

            <CurrentUser user={user}/>
            <Signup user={user} setUser={setUser}/>

            <Link to={"../sign_in"}>Sign In Instead</Link>
            <br/>
            <Link to={"../reset_password"}>Forgot Your Password?</Link>

        </div>
     );
}
 
export default SignUpPage;