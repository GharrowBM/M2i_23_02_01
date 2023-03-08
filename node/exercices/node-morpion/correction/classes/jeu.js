

export class Jeu {
    constructor() {
        this.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
    }

    afficher(){
        for(let i=0; i<this.board.length; i++){
            let ligne = ''
            for(let j=0; j <this.board[i].length; j++){
                ligne += '|'+this.board[i][j]+'|'
            }
            console.log(ligne)
            console.log('---------')
        }
    }

    jouer(joueur,x,y) {
        if(this.board[x-1][y-1] == ' '){
            this.board[x-1][y-1] = joueur
            return true
        }
        return false
    }

    testFin() {
        let test = true
        for(let i = 0; i < this.board.length; i++){
            for(let j=0; j < this.board.length; j++){
                if(this.board[i][j] == ' '){
                    test = false
                    break
                }
            }
        }
        return test
    }

    testwin(joueur){
        return (this.testHor(joueur) || this.testVertical(joueur)) || this.testDiagonale(joueur)
    }

    testHor(joueur){
        return false
    }

    testVertical(joueur){
        return false
    }

    testDiagonale(joueur){
        return false
    }
}