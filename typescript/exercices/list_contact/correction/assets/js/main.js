import Person from "./classes/Person.js";
const contacts = [
    new Person("Albert", "DUPONT", new Date("1985-10-25"), "a.dupont@example.com", "+33 123 456 789", ""),
    new Person("Hélène", "DUPONT", new Date("1988-06-27"), "h.dupont@example.com", "+33 147 654 852", ""),
    new Person("John", "SMITH", new Date("1992-04-14"), "j.smith@example.com", "+32 158 943 225", ""),
    new Person("Clara", "GOMEZ", new Date("1967-09-13"), "c.gomez@example.com", "+33 146 997 254", ""),
    new Person("Elizabeth", "MARTIN", new Date("1964-02-22"), "e.martin@example.com", "+33 119 788 254", ""),
];
let selectedContact = contacts[0];
const contactContainerEl = document.querySelector('#contactsContainer');
const addContactButtonEl = document.querySelector("button#addContact");
const editContactButtonEl = document.querySelector("button#editContact");
const deleteContactButtonEl = document.querySelector("button#deleteContact");
const contactModalEl = document.querySelector("#contactModal");
const contactEditModalEl = document.querySelector("#contactEditModal");
const addContactForm = document.querySelector("form#contactAdd");
const editContactForm = document.querySelector("form#contactEdit");
const modalCloseButtonEl = document.querySelector('#contactModal #modalClose');
const modalEditCloseButtonEl = document.querySelector('#contactEditModal #modalEditClose');
const refreshDetails = () => {
    const firstnameInputEl = document.querySelector('input#firstname');
    const lastnameInputEl = document.querySelector('input#lastname');
    const dateOfBirthInputEl = document.querySelector('input#dateOfBirth');
    const emailInputEl = document.querySelector('input#email');
    const phoneNumberInputEl = document.querySelector('input#phoneNumber');
    const avatarImgEl = document.querySelector('img#avatar');
    const ageSpanEl = document.querySelector('span#age');
    if (selectedContact) {
        firstnameInputEl.value = selectedContact.firstname;
        lastnameInputEl.value = selectedContact.lastname;
        dateOfBirthInputEl.value = selectedContact.dateOfBirth.toLocaleDateString();
        emailInputEl.value = selectedContact.email;
        phoneNumberInputEl.value = selectedContact.phoneNumber;
        avatarImgEl.src = selectedContact.avatarURL;
        ageSpanEl.textContent = `${selectedContact.age} years old`;
    }
    else {
        firstnameInputEl.value = "";
        lastnameInputEl.value = "";
        dateOfBirthInputEl.value = "jj/mm/yyyy";
        emailInputEl.value = "";
        phoneNumberInputEl.value = "";
        avatarImgEl.src = "./assets/img/unknown.jpg";
        ageSpanEl.textContent = "0 years old";
    }
};
const refreshContactContainer = () => {
    contactContainerEl.innerHTML = "";
    contacts.forEach(contact => {
        let newButton = document.createElement('button');
        newButton.textContent = contact.fullname;
        newButton.className = contact === selectedContact ? "btn btn-light p-2 px-4 w-100 my-2" : "btn btn-outline-light p-2 px-4 w-100 my-2";
        newButton.id = `selectContact-${contact.id}`;
        newButton.addEventListener('click', () => {
            selectedContact = contact;
            refreshDetails();
            refreshContactContainer();
        });
        contactContainerEl.appendChild(newButton);
    });
};
addContactButtonEl.addEventListener('click', () => {
    contactModalEl.style.display = "block";
    addContactForm.querySelector("#form-firstname").value = "";
    addContactForm.querySelector("#form-lastname").value = "";
    addContactForm.querySelector("#form-email").value = "";
    addContactForm.querySelector("#form-phoneNumber").value = "";
    addContactForm.querySelector("#form-avatarURL").value = "";
    addContactForm.querySelector("#form-dateOfBirth").value = "";
});
modalEditCloseButtonEl.addEventListener('click', () => {
    contactEditModalEl.style.display = "none";
});
modalCloseButtonEl.addEventListener('click', () => {
    contactModalEl.style.display = "none";
});
window.addEventListener('click', (e) => {
    if (e.target == contactModalEl) {
        contactModalEl.style.display = "none";
    }
    else if (e.target === contactEditModalEl) {
        contactEditModalEl.style.display = "none";
    }
});
addContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = addContactForm.querySelector("#form-firstname").value;
    const lastname = addContactForm.querySelector("#form-lastname").value;
    const email = addContactForm.querySelector("#form-email").value;
    const phoneNumber = addContactForm.querySelector("#form-phoneNumber").value;
    const avatarURL = addContactForm.querySelector("#form-avatarURL").value;
    const dateOfBirth = new Date(addContactForm.querySelector("#form-dateOfBirth").value);
    const newPerson = new Person(firstname, lastname, dateOfBirth, email, phoneNumber, avatarURL);
    contacts.push(newPerson);
    contactModalEl.style.display = "none";
    refreshContactContainer();
});
editContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = editContactForm.querySelector("#form-firstname").value;
    const lastname = editContactForm.querySelector("#form-lastname").value;
    const email = editContactForm.querySelector("#form-email").value;
    const phoneNumber = editContactForm.querySelector("#form-phoneNumber").value;
    const avatarURL = editContactForm.querySelector("#form-avatarURL").value;
    const dateOfBirth = new Date(editContactForm.querySelector("#form-dateOfBirth").value.split("/").reverse().join("-"));
    selectedContact.firstname = firstname;
    selectedContact.lastname = lastname;
    selectedContact.email = email;
    selectedContact.phoneNumber = phoneNumber;
    selectedContact.avatarURL = avatarURL;
    selectedContact.dateOfBirth = dateOfBirth;
    contactEditModalEl.style.display = "none";
    refreshContactContainer();
    refreshDetails();
});
deleteContactButtonEl.addEventListener('click', () => {
    const answer = confirm("Are you sure?");
    if (answer) {
        contacts.splice(contacts.indexOf(selectedContact), 1);
        selectedContact = undefined;
        refreshContactContainer();
        refreshDetails();
    }
});
editContactButtonEl.addEventListener('click', () => {
    contactEditModalEl.style.display = "block";
    editContactForm.querySelector("#form-firstname").value = selectedContact.firstname;
    editContactForm.querySelector("#form-lastname").value = selectedContact.lastname;
    editContactForm.querySelector("#form-email").value = selectedContact.email;
    editContactForm.querySelector("#form-phoneNumber").value = selectedContact.phoneNumber;
    editContactForm.querySelector("#form-avatarURL").value = selectedContact.avatarURL;
    editContactForm.querySelector("#form-dateOfBirth").value = selectedContact.dateOfBirth.toLocaleDateString();
});
refreshDetails();
refreshContactContainer();
