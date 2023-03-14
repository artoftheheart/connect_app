import CurrentUser from "../auth/CurrentUser";
import { Link } from "react-router-dom";

const HomePage = ({user}) => {
    return ( 

        <div className="home-page">

            <h2>Home</h2>

            <p>Welcome to Art of the Heart's app!</p>

            <CurrentUser user={user}/>

            <Link to={"sign_in"}>Sign In</Link>
            <br/>
            <Link to={"sign_up"}>Sign Up</Link>

        </div>

     );
}
 
export default HomePage;