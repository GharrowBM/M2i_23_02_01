import { useState } from "react"
import Customer from "../interfaces/Customer"

interface Props {

} 

const ComponentWithHooks = (props: Props) => {

  /*
    Lorsque l'on travaille avec le Typescript dans les hooks, il nous faut, pour le hook 'useState()' ajouter un peu plus de détail sur quel type de données seront stockées dans ce state en particulier. De la sorte, on peut avoir plus de contrôle et une meilleure vérification avant le Runtime. Cela dans le but de nous éviter des erreurs plus tard dans le développement. 

    Le typage peut être inféré lorsqu'il s'agit d'un type primitif, comme un booléen, un nombre, etc... mais devient obligatoirement manuel lorsque le type est un type primitif multiple (une variable pouvant contenir, au choix, une chaine de caractère ou un nombre par exemple) ou un type référence comme un Array ou un object (classes / interfaces principalement).
  */

  const [monTexte, setMonTexte] = useState("")
  const [monTableau, setMonTableau] = useState<number[]>([])
  const [monObjet, setMonObjet] = useState<Customer>({firstname: "", lastname: "", age: 25})

  console.log(monObjet.firstname)

  const changeMyValues = () => {
    setMonTexte("Blabla")
    setMonTableau([2, 4, 6])
    setMonObjet({
      firstname: "Alain",
      lastname: "DUPONT"
    })
  }



  return (
    <>
      <div>
        <p>La valeur de monTexte est : <b>{monTexte}</b></p>
        <p>La valeur de monTableau est : <b>[{monTableau.join(", ")}]</b></p>
        <p>La valeur de monObjet est : <b>{JSON.stringify(monObjet)}</b></p>
      </div>
      <button onClick={changeMyValues}>Change Values</button>
    </>
  )
}

export default ComponentWithHooks