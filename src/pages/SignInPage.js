import CurrentUser from "../auth/CurrentUser";
import Signin from "../auth/Signin";
import { Link } from "react-router-dom";

const SignInPage = ({user, setUser}) => {
    return ( 
        <div className="sign-in-page">

            <CurrentUser user={user}/>

            <Signin setUser={setUser}/>

            <Link to={"../sign_up"}>Sign Up Instead</Link>

        </div>

     );
}
 
export default SignInPage;