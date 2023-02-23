const CurrentUser = ({user}) => {

    return ( 
        <div className="current-user">
            <p>Currently signed in user: {user}</p>
        </div>
     );
}
 
export default CurrentUser;