import React from 'react';
import {  useParams } from 'react-router-dom';

function Cart({items}) {
    const params = useParams();
    return (

        <div className='container  mt-5 .bg-secondary.bg-gradient'>
            <div className='row '>
                <div className="card" >
                    <div key={items.id}>
                        {items.map(item => (
                           
                            item.id === parseInt(params.itemId) &&

                            <div className='item '>
                                 <h2 className="card-text fw-bold fs-5 text-uppercase ">{item.category}</h2>
                                <img alt={item.title} src={item.image} className="card-img-top"  height='500' width='500px'/>
                                
                                <div className="card-body text-50">
                                    <h2 className="card-text fw-bold fs-5 text-capitalize ">{item.title}</h2>                                  
                                    <p className="card-text fw-bold fs-5 "> ${item.price}</p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart;