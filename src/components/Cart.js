import React,{useEffect,useState} from 'react';
import { RoomContext } from '../CartContent';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Cart() {

    const { saved } = useContext(RoomContext)
    const { setSaved } = useContext(RoomContext)
    const [price,setPrice] =useState(0)


    const navigate = useNavigate();

    function handleClick() {
        navigate('/productlist')
    }

    function handleRemove(e, saved_id) {
        e.preventDefault()
        const arr = saved.filter((item) => item.id !== saved_id)

        setSaved(arr)
        console.log('kula', arr)

    }
    const handlePrice = () => {
        let answ = 0
        saved.map((item) => (
            answ += item.price
        ))
        setPrice(answ)
    }
    useEffect(() => {
        handlePrice();
    });

    return (
        <>
            <div>
                <button className="btn btn-info mt-3" onClick={handleClick}>Go Back</button>

            </div>

            <br />
            <div className="card text-center" key={saved.id} >

                <div key={saved.id}>
                    {saved.map(item => (

                        <div className='item  text-center  col-md-4' key={saved.id}>
                            <h2 className="card-text fw-bold fs-5 text-uppercase ">{item.category}</h2>
                            <img alt={item.title} src={item.image} className="card-img-top" height='100px' width='100px' />
                            <div className="card-body text-50 col-md">
                                <h2 className="card-text fw-bold fs-5 text-capitalize ">{item.title}</h2>
                                <p className="card-text fw-bold fs-5  text-center"> ${item.price}</p>
                            </div>
                            <button className="btn btn-dark mt-3" onClick={(e) => handleRemove(e, item.id)}>Remove</button>
                        </div>


                    ))}
                    <div className='total'>
                        <span>Total Price</span>
                        <span> ${price}</span>

                    </div>


                </div>

            </div>

        </>





    )
}

export default Cart;

/*
/*<div className='total'>
                        <span>Total Price</span>
                        <span> ${price}</span>

                     </div>
                     
                     
                     /*
    const handlePrice = ()=>{
                     let answ=0  
        saved.map((item)=>(
            answ += item.price    
        ))
        setPrice(answ)
    }
    useEffect(()=>{
        handlePrice();
    }); 
    */

                     
                 
















