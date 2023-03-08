import { Jeu } from "./jeu.js"
import { poserUneQuestion } from "./tools.js"


export class Ihm {
    constructor(){
        this.jeu = new Jeu() 
        this.first = true
        this.fin = false
    }

    async getPositions(){
        const joueur = this.first ? 'X' : 'O'
        console.log("Joueur : "+ joueur)
       // console.log("le joueur choisie sa case")
       const x = await poserUneQuestion("Merci de saisir x : ")
       const y = await poserUneQuestion("Merci de saisir y : ")
       return { joueur : joueur, x : x, y : y}
    }

    async demarrer(){
       
        while(!this.fin) {
            const res = await this.getPositions()
            if(this.jeu.jouer(res.joueur, res.x,res.y)){
                this.first = !this.first
                this.jeu.afficher()
                this.fin = this.jeu.testFin()
            }
           
            
        }
    }

}