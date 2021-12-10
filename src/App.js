import './App.css';
import NavBar from './Componentes/NavBara';
import Muro from './Componentes/Muros';

 


function App() {
 


  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>  
      </header>      
      <div id="vista">
        
        <Muro/>
      </div>
    </div>
    
  );
}

export default App;
