import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to='/cadastrar'>Cadastrar</Link> <br />
      <Link to='/listar'>Lista de animes</Link>
    </div>
  );
}

export default App;
