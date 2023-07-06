import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Component/ProductAll';
import ProductDetail from './Component/ProductDetail';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import { useState, useEffect } from 'react';
import PrivateRouter from './Component/PrivateRouter';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate])

  return ( 
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' 
        element={<Login setAuthenticate={setAuthenticate}/>} 
        />
        <Route path='/products/:id'
          element={<PrivateRouter authenticate={authenticate} />} 
          />
      </Routes>
    </div>
  );
}

export default App;
