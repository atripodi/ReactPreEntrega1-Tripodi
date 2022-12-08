import './App.css';
import '../src/components/Navbar/Navbar.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  // const [page, setPage] = useState("list") // si el estado dice list, muestro itemListContainer. 

  return (
    <div className="App">

    <BrowserRouter>
        <header className="App-header">
          <Navbar/>
        </header>
      {/* <div>

      <button onClick={() => setPage ("list")}> Ver todos los productos</button>
      <button onClick={() => setPage ("detail")}> Detalle producto</button>
      </div>  
      {page === "list" && <ItemListContainer />}
      {page === "detail" && <ItemDetailContainer/>} */}

      <div>
        <Link to="/">Listado de productos</Link>
        <Link to="/detail">Detalle</Link>
      </div>

      <Routes>
        <Route path= "/" element={<ItemListContainer/>}/>
        <Route path= "/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path= "/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
