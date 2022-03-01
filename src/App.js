import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Chapati from './Components/Chapati';
import Pickle from './Components/Pickle';
import Curd from './Components/Curd';
import Sweet from './Components/Sweet';
import Dal from './Components/Dal';
import Paneer from './Components/Paneer';
import Rice from './Components/Rice';
import Cart from './Components/Cart';
import Product from './Components/Product';
import CheckOut from './Components/CheckOut';
function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/Chapati" element={<Chapati />} />
        <Route path="/Pickle" element={<Pickle />} />
        <Route path="/Curd" element={<Curd />} />
        <Route path="/Sweet" element={<Sweet />} />
        <Route path="/Dal" element={<Dal />} />
        <Route path="/Paneer" element={<Paneer />} />
        <Route path='/Rice' element={<Rice/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
