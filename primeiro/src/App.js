import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';


function App() {
  return (
    <div className="App">
      <h1> Meu app react</h1>
      <HelloWorld />
      <Frase />
      <DigaMeuNome nome="Vitor" />

    </div>
  );
}

export default App;
