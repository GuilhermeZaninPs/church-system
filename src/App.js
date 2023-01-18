import Logo from './images/logo.png'
import { Home } from './Style'
import './App.css';

function App() {
  return (
    <Home>
      <img src={Logo} alt='Logo'></img>
      <div>
        <h1>DEPARTAMENTO</h1>
        <input type='text'></input>
        <button>Iniciar</button>
      </div>
    </Home>
  );
}

export default App;
