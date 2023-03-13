import OpenEnded from "../util/OpenEnded";
import { useEffect, useState } from "react";
import { StudentInformation } from "./InformationClass";

const EmergencyContact = ({studentInfo, emergencyContactChange}) => {

    const [newEmergencyContact, setNewEmergencyContact] = useState(new studentInfo.EmergencyContact());

    const setFirstName = (firstName) => {
        setNewEmergencyContact({...newEmergencyContact, firstName: firstName});
    }

    const setLastName = (lastName) => {
        setNewEmergencyContact({...newEmergencyContact, lastName: lastName});
    }

    const setPhoneNumber = (phoneNumber) => {
        setNewEmergencyContact({...newEmergencyContact, phoneNumber: phoneNumber});
    }

    const setEmail = (email) => {
        setNewEmergencyContact({...newEmergencyContact, email: email});
    }

    const setRelationship = (relationship) => {
        setNewEmergencyContact({...newEmergencyContact, relationship: relationship});
    }

    useEffect(() => {
        emergencyContactChange(newEmergencyContact);
    // eslint-disable-next-line
    }, [newEmergencyContact]);

    return ( 
        <div className="emergency-contact">

            <h3>Emergency Contact</h3>

            <OpenEnded question="First Name:" setResponse={setFirstName}/>
            <OpenEnded question="Last Name:" setResponse={setLastName}/>
            <OpenEnded question="Phone Number:" setResponse={setPhoneNumber}/>
            <OpenEnded question="Email:" setResponse={setEmail} type="email"/>
            <OpenEnded question="Relationship:" setResponse={setRelationship}/>

        </div>
    );
}
 
export default EmergencyContact;

