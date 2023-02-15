import MainComponent from './components/MainComponent';
import OldFormComponent from './components/OldFormComponent';

function App() {
  const clickHandler = (something: string) => {
    console.log("Clicked! " + something)
  }

  return (
    <div className="App">
      <MainComponent proName="blabla" blabla={clickHandler} />
      <OldFormComponent />
    </div>
  );
}

export default App;
