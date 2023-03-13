export class StudentInformation {
    constructor(firstName="", lastName="", dateOfBirth="", streetAddress="", city="", state="", zipCode="", school="", emergencyContact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.school = school;

        this.EmergencyContact = class {
            constructor(firstNameEC="", lastNameEC="", phoneNumberEC="", emailEC="", relationshipEC="") {
                this.firstName = firstNameEC;
                this.lastName = lastNameEC;
                this.phoneNumber = phoneNumberEC;
                this.email = emailEC;
                this.relationship = relationshipEC;
            };
        }

        if (emergencyContact == null) {

            this.emergencyContact = new this.EmergencyContact();

        } else {
            this.emergencyContact = emergencyContact;
        }

        
    }

    getFirstName() {

        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    getStreetAddress() {
        return this.streetAddress;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }

    getZipCode() {
        return this.zipCode;
    }

    getSchool() {
        return this.school;
    }

    getEmergencyContact() {
        return this.emergencyContact;
    }

    getEmergencyContactFirstName() {

        return this.emergencyContact.firstName;
    }

    getEmergencyContactLastName() {
        return this.emergencyContact.lastName;
    }

    getEmergencyContactPhoneNumber() {
        return this.emergencyContact.phoneNumber;
    }

    getEmergencyContactEmail() {
        return this.emergencyContact.email;
    }

    getEmergencyContactRelationship() {
        return this.emergencyContact.relationship;
    }
    log() {
        console.log(this)
    }
    
}