import OpenEnded from "../util/OpenEnded";
import { StudentInformation } from "./InformationClass";
import { useState } from "react";
import { getStudentInformation, studentRegistration } from "../util/firebase";
import EmergencyContact from "./EmergencyContact";
import { useNavigate } from "react-router-dom";


const StudentRegistration = () => {

    const [info, setInfo] = useState(new StudentInformation());
    const [errorMessage, setErrorMessage] = useState('');

    const firstNameChange = (firstName) => {
        setInfo({...info, firstName: firstName});
    }

    const lastNameChange = (lastName) => {
        setInfo({...info, lastName: lastName});
    }

    const dateOfBirthChange = (dateOfBirth) => {
        setInfo({...info, dateOfBirth: dateOfBirth});
    }

    const streetAddressChange = (streetAddress) => {
        setInfo({...info, streetAddress: streetAddress});
    }

    const cityChange = (city) => {
        setInfo({...info, city: city});
    }

    const stateChange = (state) => {
        setInfo({...info, state: state});
    }

    const zipCodeChange = (zipCode) => {
        setInfo({...info, zipCode: zipCode});
    }

    const schoolChange = (school) => {
        setInfo({...info, school: school});
    }

    const emergencyContactChange = (emergencyContact) => {
        setInfo({...info, emergencyContact: emergencyContact});
    }
/*
    const [studentInformationOutput, setStudentInformationOutput] = useState(new StudentInformation());
    <button onClick={() => {
        getStudentInformation(setStudentInformationOutput)
        //console.log(studentInformationOutput)
        //studentInformationOutput.log()
    }}>Get Student Info</button>

    <p>{studentInformationOutput.getEmergencyContactEmail()}</p>
    */
    const navigate = useNavigate();

    const submitForm = () => {
        if (info.firstName === '') {
            setErrorMessage("You must enter a first name.");
        }
        else if (info.lastName === '') {
            setErrorMessage("You must enter a last name.");
        }
        else if (info.dateOfBirth === '') {
            setErrorMessage("You must enter a date of birth.");
        }
        else if (info.streetAddress === '') {
            setErrorMessage("You must enter a street address.");
        }
        else if (info.city === '') {
            setErrorMessage("You must enter a city.");
        }
        else if (info.state === '') {
            setErrorMessage("You must enter a state.");
        }
        else if (info.zipCode === '') {
            setErrorMessage("You must enter a zip code.");
        }
        else if (info.school === '') {
            setErrorMessage("You must enter a school.");
        } 
        else if (info.emergencyContact.firstName === '') {
            setErrorMessage("You must enter an emergency contact first name.");
        }
        else if (info.emergencyContact.lastName === '') {
            setErrorMessage("You must enter an emergency contact last name.");
        }
        else if (info.emergencyContact.phoneNumber === '') {
            setErrorMessage("You must enter an emergency contact phone number.");
        }
        else if (info.emergencyContact.email === '') {
            setErrorMessage("You must enter an emergency contact email.");
        }
        else if (info.emergencyContact.relationship === '') {
            setErrorMessage("You must enter an emergency contact relationship.");
        }
        else {
            setErrorMessage('');
            navigate('../');
            studentRegistration(info);
        }
    
    }

    return ( 
        <div className="student-registration">
            <h2>Student Account Registration</h2>

            <OpenEnded question="First Name:" setResponse={(firstNameChange)}/>
            <OpenEnded question="Last Name:" setResponse={lastNameChange}/>
            <OpenEnded question="Date of Birth:" setResponse={dateOfBirthChange} type="date"/>
            <OpenEnded question="Street Address:" setResponse={streetAddressChange}/>
            <OpenEnded question="City:" setResponse={cityChange}/>
            <OpenEnded question="State:" setResponse={stateChange}/>
            <OpenEnded question="Zip Code:" setResponse={zipCodeChange}/>
            <OpenEnded question="School:" setResponse={schoolChange}/>

            <EmergencyContact studentInfo={info} emergencyContactChange={emergencyContactChange}/>
            
            {/* TODO: "add another emergency contact" button*/}

            <button onClick={submitForm}>Submit</button>
            <div className="error-message"> {errorMessage} </div>

        </div>
    );
}
 
export default StudentRegistration;