import React, { useState, useEffect } from 'react';

function ProductList() {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setItems(json))

    }, [])
    return (
        <>
            <div className='container'>
                {items.map((item) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='content'>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <img src={item.image} alt=''/>
                            </div>




                        </>
                    )
                })}

            </div>




        </>


    )
}

export default ProductList