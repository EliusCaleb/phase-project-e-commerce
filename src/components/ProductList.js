import React, { useState, useEffect } from 'react';

function ProductList() {
   
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    return (
        <>
            <h2 className='text-center text-success my-5'>Products</h2>
             <hr/>
            <div className='container my-5 py-5'>
                <div className='row d-flex justify-content-center'>
                          
                            {items.map((item) => {
                                return (
                                    <>
                                    <div className='col-md-4' key={item.id} >
                                    <div className="card"  key={item.id}>
                                    <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.price}</p>
                                            <button className='btn btn-success'>BuyNow</button>
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