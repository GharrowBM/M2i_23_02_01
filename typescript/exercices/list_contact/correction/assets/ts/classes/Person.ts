export default class Person {
  private static _count = 0
  private _id: number;
  constructor(private _firstname: string, private _lastname: string, private _dateOfBirth: Date, private _email: string, private _phoneNumber: string, private _avatarURL: string) {
    this._id = ++Person._count
  }

  get id() {
    return this._id
  }

  get firstname() {
    return this._firstname
  }

  set firstname(value: string) {
    this._firstname = value
  }

  get lastname() {
    return this._lastname
  }

  set lastname(value: string) {
    this._lastname = value
  }

  get fullname() {
    return this._firstname + " " + this._lastname
  }

  get dateOfBirth() {
    return this._dateOfBirth
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value
  }

  get age() {
    const today = new Date()
    const todayCopy = new Date()
    todayCopy.setFullYear(this._dateOfBirth.getFullYear())
    if (todayCopy > this._dateOfBirth) {
      return today.getFullYear() - this._dateOfBirth.getFullYear()
    } else {
      return today.getFullYear() - this._dateOfBirth.getFullYear() - 1
    }
  }

  get email() {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  get phoneNumber() {
    return this._phoneNumber
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value
  }

  get avatarURL() {
    if (this._avatarURL === "") {
      return "./assets/img/unknown.jpg"
    } else {
      return this._avatarURL
    }
  }

  set avatarURL(value: string) {
    this._avatarURL = value
  }
}