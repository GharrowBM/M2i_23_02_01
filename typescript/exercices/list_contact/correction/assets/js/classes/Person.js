export default class Person {
    constructor(_firstname, _lastname, _dateOfBirth, _email, _phoneNumber, _avatarURL) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._dateOfBirth = _dateOfBirth;
        this._email = _email;
        this._phoneNumber = _phoneNumber;
        this._avatarURL = _avatarURL;
        this._id = ++Person._count;
    }
    get id() {
        return this._id;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
    get fullname() {
        return this._firstname + " " + this._lastname;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    get age() {
        const today = new Date();
        const todayCopy = new Date();
        todayCopy.setFullYear(this._dateOfBirth.getFullYear());
        if (todayCopy > this._dateOfBirth) {
            return today.getFullYear() - this._dateOfBirth.getFullYear();
        }
        else {
            return today.getFullYear() - this._dateOfBirth.getFullYear() - 1;
        }
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get avatarURL() {
        if (this._avatarURL === "") {
            return "./assets/img/unknown.jpg";
        }
        else {
            return this._avatarURL;
        }
    }
    set avatarURL(value) {
        this._avatarURL = value;
    }
}
Person._count = 0;
