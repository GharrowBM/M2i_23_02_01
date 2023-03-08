import { Contact } from "./contact.js"


export class Data {
    constructor(){
        this.contacts = []
        this.compteur = 0
    }

    ajouterContact(nom , prenom,telephone, email) {
        const contact = new Contact(++this.compteur, nom , prenom,telephone, email)
        this.contacts.push(contact)
    }

    recupContact(id){
        return this.contacts.find(c => c.id == id)
    }

    modifierContact(id, nom, prenom,telephone,email){
        const contact = this.recupContact(id)
        if(contact != undefined){
            contact.nom = nom
            contact.prenom = prenom
            contact.telephone = telephone
            contact.email = email
            return true
        }
        return false
    }

    supprimerContact(id){
        const contact = this.recupContact(id)
        if(contact != undefined){
            this.contacts = this.contacts.filter(c => c.id != id)
            return true
        }
        return false
    }
}