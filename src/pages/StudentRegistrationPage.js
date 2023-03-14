import CurrentUser from "../auth/CurrentUser";
import StudentRegistration from "../form/StudentRegistration";

const StudentRegistrationPage = ({user}) => {
    return ( 
        <div className="student-registration-page">

            <p>Please verify your email by clicking the link in the email sent to your inbox.</p>
            <CurrentUser user={user}/>

            <StudentRegistration />
        </div>
     );
}
 
export default StudentRegistrationPage;