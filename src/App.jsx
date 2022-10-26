import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting="Bienvenidos" color="blue"/>
    </div>
  );
}

export default App;
