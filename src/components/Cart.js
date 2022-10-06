import React from 'react';
import { RoomContext } from '../CartContent';
import {useContext} from 'react'




function Cart() {
    const {saved} = useContext(RoomContext)
    console.log(saved)
       
    return (
        <div className="card" >
        <div key={saved.id}>
            {saved.map(item => (
               

                <div className='item '>
                     <h2 className="card-text fw-bold fs-5 text-uppercase ">{item.category}</h2>
                    <img alt={item.title} src={item.image} className="card-img-top"  height='100px' width='100px'/>
                   
                    <div className="card-body text-50">
                        <h2 className="card-text fw-bold fs-5 text-capitalize ">{item.title}</h2>
                        <p className="card-text fw-bold fs-5  text-center"> ${item.price}</p>


                        

                    </div>

                </div>

            ))}

        </div>

    </div>
       
       

       
    )
}

export default Cart;