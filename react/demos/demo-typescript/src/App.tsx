import ClassComponent from "./components/ClassComponent";
import ComponentWithHooks from "./components/ComponentWithHooks";
import ComponentWithProps from "./components/ComponentWithProps";
import FirstComponent from "./components/FirstComponent";

function App() {
  const fonctionDeLog = () => {
    console.log("Je logue !")
  }

  const sayHi = (nom: string) => {
    console.log(`Bonjour ${nom}!`)
  }

  return (
    <div className="App">
      <FirstComponent />
      <ComponentWithProps leTexte="Du texte" lesNoms={["Albert", "Martha", "Sophie", "Ali"]} onSayHi={sayHi}/>
      <ComponentWithProps leTexte="Du texte" leNombre={14} onButtonClick={fonctionDeLog}/>
      <ClassComponent />
      <ComponentWithHooks />
    </div>
  );
}

export default App;
