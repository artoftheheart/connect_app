import OpenEnded from "../util/OpenEnded";
import { StudentInformation } from "./InformationClass";
import { useState } from "react";
import { getStudentInformation, studentRegistration } from "../util/firebase";
import EmergencyContact from "./EmergencyContact";


const StudentRegistration = () => {

    const [info, setInfo] = useState(new StudentInformation());

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

    const [studentInformationOutput, setStudentInformationOutput] = useState(new StudentInformation());

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

            <button onClick={() => studentRegistration(info)}>Submit</button>
            <button onClick={() => {
                getStudentInformation(setStudentInformationOutput)
                //console.log(studentInformationOutput)
                //studentInformationOutput.log()
            }}>Get Student Info</button>

            <p>{studentInformationOutput.getEmergencyContactEmail()}</p>

        </div>
    );
}
 
export default StudentRegistration;