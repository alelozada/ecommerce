import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ProtectedPages from './pages/ProtectedPages';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Rutas Públicas */}
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' />
        {/* Rutas Privadas */}
        <Route element={<ProtectedPages/>} >
          <Route path='/' element={<h1>Inicio</h1>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/success' element={<h1>¡Compra realizada con éxito!</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
