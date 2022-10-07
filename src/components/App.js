import React,{useState,useEffect} from "react";
import { Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProductList from "./ProductList";
import SignUP from "./SignUP";
import Products from "./Products";
import Cart from "./Cart";
import { RoomProvider } from "../CartContent";





function App() {
  const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);

  return (
    <>
     <RoomProvider>
     <NavBar />
      <Routes>
        <Route exact='true' path='/home' element={<Home />} ></Route>
        <Route exact='true' path='/about' element={<About />} ></Route>
        <Route exact='true' path='/productlist' element={<ProductList  items={items}/>} ></Route>
        <Route path="/products/:itemId" element={<Products items={items} />}></Route>      
        <Route exact='true' path='/signup' element={<SignUP />} ></Route>
        <Route exact='true' path='/cart' element={<Cart  />} ></Route>
      </Routes>
     </RoomProvider>
      

    </>
  );
}

export default App;
