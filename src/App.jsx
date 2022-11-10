import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a dietetica Todo sano" />}/>;
          <Route path="/item/:id" element={ <ItemDetailContainer/>}/>;
          <Route path="/category/:id" element={ <ItemListContainer greeting="Bienvenidos a dietetica Todo sano" />}/>;
          <Route path='*' element={ <h1>Pagina no existe</h1> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
