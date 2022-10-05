import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light text-info  py-3 shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand  mx-2 fw-bold fs-5" end to="/">BIG DADDY SHOP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link  fw-bold fs-5" aria-current="page" end to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item me-4 fw-bold  fs-5" >
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item me-4 fw-bold fs-5">
                                <NavLink className="nav-link" to="/productlist">Products</NavLink>
                            </li>
                        </ul>
                        <div className='user '>
                            <NavLink className="btn btn-outline-dark me-3" to="/cart">Cart</NavLink>
                            <NavLink className="btn btn-outline-dark me-3" to="/signup">SignUP</NavLink>



                        </div>

                    </div>
                </div>
            </nav>




        </>

    )
}

export default NavBar