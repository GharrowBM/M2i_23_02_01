import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { ThirdClient } from './ThirdClient'

export class ThirdListe extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {
            clients : [
                {
                    nom: "Harry",
                    prenom: "Potter",
                    telephone: "0123456789",
                    statut : true,
                    adresse: {
                        rue: "ma rue",
                        ville: "ma ville",
                        cp: "59200"
                    }
                },{
                    nom: "Hermione",
                    prenom: "Granger",
                    telephone: "0123456789",
                    statut : false,
                    adresse: {
                        rue: "ma rue",
                        ville: "ma ville",
                        cp: "59200"
                    }
                },{
                    nom: "Weasley",
                    prenom: "Ron",
                    telephone: "0123456789",
                    statut : true,
                    adresse: {
                        rue: "ma rue",
                        ville: "ma ville",
                        cp: "59200"
                    }
                }]
            
        }
    }

    render() {

        return (
            <>
             <table>
                    <thead>
                        <tr>
                            <th colSpan="8">Mes Clients</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.clients.map((client,i) => (<ThirdClient client={client} key={i}></ThirdClient>))}         
                    </tbody>
                    </table>
             
            </>
        )
    }
}