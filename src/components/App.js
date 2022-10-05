import React from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProductList from "./ProductList";
import SignUP from "./SignUP";



function App() {

  return (
    <div classNameName="App">

        <NavBar />

      <Routes>
          <Route exact='true' path='/' element={<Home />} ></Route>
          <Route exact='true' path='/bigdaddy' element={<Home />} ></Route>
          <Route exact='true' path='/about' element={ <About />} ></Route>
          <Route exact='true' path='/products' element={<ProductList />} ></Route>
          <Route exact='true' path='/signup' element={<SignUP/>} ></Route>
          
      </Routes>

      
  
    </div>
  );
}

export default App;
