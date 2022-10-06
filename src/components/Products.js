import React from 'react';
import {  useParams } from 'react-router-dom';
import { RoomContext } from '../CartContent';
import {useContext} from 'react';



function Products({ items }) {
    const { addCart}= useContext(RoomContext)
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
                                <p  className='lead fw-bolder text-center '> Rating {item.rating && item.rating.rate}
                                <i className='fa fa-star'></i></p>
                                <div className="card-body text-50">
                                    <h2 className="card-text fw-bold fs-5 text-capitalize ">{item.title}</h2>
                                    <p className="card-text  fs-5">{item.description}</p>
                                    <p className="card-text fw-bold fs-5 "> ${item.price}</p>

                                    <button className="'btn btn-success'"   onClick={()=>{addCart(item)}}>AddTOCART</button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Products;






