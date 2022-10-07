import React from 'react';
import { NavLink } from 'react-router-dom';

function ProductList({ items }) {
    console.log(items)
   
    return (
        <>
            <h2 className='text-center text-success my-5'>Products</h2>
             <hr/>
            <div className='container my-5 py-5'key={items.id}>
                <div className='row d-flex justify-content-center' key={items.id}>
                          
                            {items.map((item) => {
                                return (
                                    <>
                                    <div className='col-md-4' key={item.id} >
                                    <div className="card text-center"  key={item.id}>
                                    <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body"key={items.id}>
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">$ {item.price}</p>
                                            <NavLink className='btn btn-success'to={`/products/${item.id}`}>BuyNow</NavLink>
                                        </div>
                                    </div>
                                    </div>

                                   
                                    
                                    </>
                                )
                            })}

                        </div>

                    </div>






        </>

    )
}

export default ProductList