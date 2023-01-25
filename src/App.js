// import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Rota from './pages/Rota.js'

function App() {
  return (
    <>
    <Router>
      <Routes>
          {/* Home page it's where all leaders can select their respective department */}
          <Route path="/" element={ <Home /> } />
         
          {/* Shift page it's where the leaders can create a new shift or edit a existing rota for all department. */}
          <Route path="/rota" element={ <Rota /> } />
      </Routes>
    </Router>

  </>

  );
}

export default App;
