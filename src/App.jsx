import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      {/* <ItemListContainer greeting="Bienvenidos a dietetica Todo sano" color="blue"/> */}
      <ItemDetailContainer id={1} />;
    </div>
  );
}

export default App;
