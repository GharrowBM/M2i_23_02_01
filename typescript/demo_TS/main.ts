console.log("Hello World!")

// Pour créer une fonction en TS, la différence est l'ajout du typage pour les paramètres
// De la sorte, on sécurise les utilisations futures de notre fonction en vérrouillant des types incorrects
function addition(a: number, b: number) {
  return a + b;
}

let result = addition(1, 2)
console.log(result);

// resultB = addition("A", "B") ne marchera pas

// Pour spécifier le type d'une variable, la syntaxe est la suivante
let maVariable: string;
maVariable = "Blabla"

// maVariable = 25 ne marchera pas, car elle est vérouillée à être un 'string'

// Via le Typescript, on a une auto-complétion et une Intellisense plus poussée
console.log(maVariable.length);

// Pour définir un tableau de 'number', il faut utiliser le type suivi des crochets 
let myNumbers: number[] = []
myNumbers.push(4)

let myStatus = "CADRE"
let myStatusB = 1

// Le typescript permet la création d'énum, des types permettant de 
// relier des valeurs numériques avec des valeurs en toutes lettres plus utiles pour nous développeur
// Au niveau de la RAM, cela restera seulement des nombres cela dit, donc on gagne en performances

enum STATUS {
  CADRE,
  SALARIE,
  COMMERCIAL,
  BLABLA
}

let myStatusC = STATUS.COMMERCIAL
let myStatusD: STATUS = 2

// On peut aussi, via le Typescript, créer des Tuples, des Array de taille fixe
// On devra du coup avoir le bon nombre d'éléments dans la variable et le bon typage dans le bon ordre !

let myPerson: [string, string, number];
myPerson = ["Albert", "DUPONT", 45]

