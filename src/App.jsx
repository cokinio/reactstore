import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartView from './components/cartView/CartView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './components/context/cartContext';
import YourOrder from './components/yourOrder/YourOrder';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a dietetica Todo sano" />}/>;
            <Route path="/reactstore" element={<ItemListContainer greeting="Bienvenidos a dietetica Todo sano" />}/>;
            <Route path="/item/:id" element={ <ItemDetailContainer/>}/>;
            <Route path="/category/:id" element={ <ItemListContainer greeting="Bienvenidos a dietetica Todo sano" />}/>;
            <Route path="/yourOrder/:idOrder" element={<YourOrder />} />
            <Route path="/cart" element={ <CartView/> }/>;
            <Route path='*' element={ <h1>Pagina no existe</h1> }/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
