import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div className="error-page">
            <h2>404</h2>
            <p>Page not found</p>
            <Link to={"../"}>Go Home</Link>
        </div>
     );
}
 
export default ErrorPage;