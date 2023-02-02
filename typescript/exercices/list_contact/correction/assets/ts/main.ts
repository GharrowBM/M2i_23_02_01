import Person from "./classes/Person";

const contacts = [
  new Person("Albert", "DUPONT", new Date("1985-10-25"), "a.dupont@example.com", "+33 123 456 789", ""),
  new Person("Hélène", "DUPONT", new Date("1988-06-27"), "h.dupont@example.com", "+33 147 654 852", ""),
  new Person("John", "SMITH", new Date("1992-04-14"), "j.smith@example.com", "+32 158 943 225", ""),
  new Person("Clara", "GOMEZ", new Date("1967-09-13"), "c.gomez@example.com", "+33 146 997 254", ""),
  new Person("Elizabeth", "MARTIN", new Date("1964-02-22"), "e.martin@example.com", "+33 119 788 254", ""),
]

let selectedContact = contacts[0]

const contactContainerEl = document.querySelector('#contactsContainer') as HTMLDivElement

const addContactButtonEl = document.querySelector("button#addContact") as HTMLButtonElement
const editContactButtonEl = document.querySelector("button#editContact") as HTMLButtonElement
const deleteContactButtonEl = document.querySelector("button#deleteContact") as HTMLButtonElement

const contactModalEl = document.querySelector("#contactModal") as HTMLDivElement
const contactEditModalEl = document.querySelector("#contactEditModal") as HTMLDivElement
const addContactForm = document.querySelector("form#contactAdd") as HTMLFormElement

const editContactForm = document.querySelector("form#contactEdit") as HTMLFormElement
const modalCloseButtonEl = document.querySelector('#contactModal #modalClose') as HTMLButtonElement
const modalEditCloseButtonEl = document.querySelector('#contactEditModal #modalEditClose') as HTMLButtonElement

const refreshDetails = () => {
  const firstnameInputEl = document.querySelector('input#firstname') as HTMLInputElement
  const lastnameInputEl = document.querySelector('input#lastname') as HTMLInputElement
  const dateOfBirthInputEl = document.querySelector('input#dateOfBirth') as HTMLInputElement
  const emailInputEl = document.querySelector('input#email') as HTMLInputElement
  const phoneNumberInputEl = document.querySelector('input#phoneNumber') as HTMLInputElement

  const avatarImgEl = document.querySelector('img#avatar') as HTMLImageElement
  const ageSpanEl = document.querySelector('span#age') as HTMLSpanElement

  if (selectedContact) {
    firstnameInputEl.value = selectedContact.firstname
    lastnameInputEl.value = selectedContact.lastname
    dateOfBirthInputEl.value = selectedContact.dateOfBirth.toLocaleDateString()
    emailInputEl.value = selectedContact.email
    phoneNumberInputEl.value = selectedContact.phoneNumber
    avatarImgEl.src = selectedContact.avatarURL
    ageSpanEl.textContent = `${selectedContact.age} years old`
  } else {
    firstnameInputEl.value = ""
    lastnameInputEl.value = ""
    dateOfBirthInputEl.value = "jj/mm/yyyy"
    emailInputEl.value = ""
    phoneNumberInputEl.value = ""
    avatarImgEl.src = "./assets/img/unknown.jpg"
    ageSpanEl.textContent = "0 years old"
  }
}


const refreshContactContainer = () => {
  contactContainerEl.innerHTML = ""
  
  contacts.forEach(contact => {
    let newButton = document.createElement('button')
    newButton.textContent = contact.fullname
    newButton.className = contact === selectedContact ? "btn btn-light p-2 px-4 w-100 my-2" : "btn btn-outline-light p-2 px-4 w-100 my-2"
    newButton.id = `selectContact-${contact.id}`
    newButton.addEventListener('click', () => {
        selectedContact = contact
        refreshDetails();
        refreshContactContainer();
      })
      
      contactContainerEl.appendChild(newButton)
    })
  }
  
addContactButtonEl.addEventListener('click', () => {  
  contactModalEl.style.display = "block";

  (addContactForm.querySelector("#form-firstname") as HTMLInputElement).value = "";
  (addContactForm.querySelector("#form-lastname") as HTMLInputElement).value = "";
  (addContactForm.querySelector("#form-email") as HTMLInputElement).value = "";
  (addContactForm.querySelector("#form-phoneNumber") as HTMLInputElement).value = "";
  (addContactForm.querySelector("#form-avatarURL") as HTMLInputElement).value = "";
  (addContactForm.querySelector("#form-dateOfBirth") as HTMLInputElement).value = "";

})  

modalEditCloseButtonEl.addEventListener('click', () => {
  contactEditModalEl.style.display = "none"
})

modalCloseButtonEl.addEventListener('click', () => {  
  contactModalEl.style.display = "none"
})  

window.addEventListener('click', (e) => {  
  if (e.target == contactModalEl) {
    contactModalEl.style.display = "none";
  } else if (e.target === contactEditModalEl) {
    contactEditModalEl.style.display = "none"
  }
})

addContactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstname = (addContactForm.querySelector("#form-firstname") as HTMLInputElement).value
  const lastname = (addContactForm.querySelector("#form-lastname") as HTMLInputElement).value
  const email = (addContactForm.querySelector("#form-email") as HTMLInputElement).value
  const phoneNumber = (addContactForm.querySelector("#form-phoneNumber") as HTMLInputElement).value
  const avatarURL = (addContactForm.querySelector("#form-avatarURL") as HTMLInputElement).value
  const dateOfBirth = new Date((addContactForm.querySelector("#form-dateOfBirth") as HTMLInputElement).value)

  const newPerson = new Person(firstname, lastname, dateOfBirth, email, phoneNumber, avatarURL);
  contacts.push(newPerson);

  contactModalEl.style.display = "none"
  refreshContactContainer();
})

editContactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstname = (editContactForm.querySelector("#form-firstname") as HTMLInputElement).value
  const lastname = (editContactForm.querySelector("#form-lastname") as HTMLInputElement).value
  const email = (editContactForm.querySelector("#form-email") as HTMLInputElement).value
  const phoneNumber = (editContactForm.querySelector("#form-phoneNumber") as HTMLInputElement).value
  const avatarURL = (editContactForm.querySelector("#form-avatarURL") as HTMLInputElement).value
  const dateOfBirth = new Date((editContactForm.querySelector("#form-dateOfBirth") as HTMLInputElement).value.split("/").reverse().join("-"))  

  selectedContact.firstname = firstname
  selectedContact.lastname = lastname
  selectedContact.email = email
  selectedContact.phoneNumber = phoneNumber
  selectedContact.avatarURL = avatarURL
  selectedContact.dateOfBirth = dateOfBirth

  contactEditModalEl.style.display = "none"
  refreshContactContainer();
  refreshDetails();
})

deleteContactButtonEl.addEventListener('click', () => {
  const answer = confirm("Are you sure?")
  if (answer) {
    contacts.splice(contacts.indexOf(selectedContact), 1)
    selectedContact = undefined
    refreshContactContainer()
    refreshDetails();
  }
})

editContactButtonEl.addEventListener('click', () => {
  contactEditModalEl.style.display = "block";

  (editContactForm.querySelector("#form-firstname") as HTMLInputElement).value = selectedContact.firstname;
  (editContactForm.querySelector("#form-lastname") as HTMLInputElement).value = selectedContact.lastname;
  (editContactForm.querySelector("#form-email") as HTMLInputElement).value = selectedContact.email;
  (editContactForm.querySelector("#form-phoneNumber") as HTMLInputElement).value = selectedContact.phoneNumber;
  (editContactForm.querySelector("#form-avatarURL") as HTMLInputElement).value = selectedContact.avatarURL;
  (editContactForm.querySelector("#form-dateOfBirth") as HTMLInputElement).value = selectedContact.dateOfBirth.toLocaleDateString();
})
  
refreshDetails();
refreshContactContainer();