import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light  bg-gray py-3 shadow-sm">
  <div class="container-fluid">
    <NavLink class="navbar-brand fw-bold fs-5" href="#">BIG DADDY SHOP</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/products">Products</NavLink>
        </li>     
      </ul>
      <div  className='user '>
      <NavLink class="btn btn-outline-dark me-3" to="/login">LogIn</NavLink>
      <NavLink class="btn btn-outline-dark me-3" to="/cart">Cart</NavLink>


      </div>
      
    </div>
  </div>
</nav>
    
    
    
    
    </>
    
  )
}

export default NavBar