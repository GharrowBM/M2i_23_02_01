

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
}