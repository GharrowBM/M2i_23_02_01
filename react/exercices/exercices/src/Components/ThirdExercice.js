import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { ThirdListe } from './ThirdExercice/ThirdListe'
export class ThirdExercice extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        //return dans un React Fragment
        return (
            <>
                <h2>Exercice 3 :</h2>
                <p>Sujet :</p>
                <p>Ajoutez à l’exercice 2, la possibilité de changer le statut d’un client.</p>
                <p>Etapes Possible pour cette exercie :</p>
                <ul>
                    <li>etape 1</li>
                    <li>etape 2</li>
                </ul>
                <ThirdListe></ThirdListe>
            </>
        )
    }
}