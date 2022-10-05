import React from 'react';
import { useParams } from 'react-router-dom';


function Products({items}) {
    const params= useParams();
   
  return (
    

    
    <div key={items.id}>
            {items.map(item => (
        item.id === parseInt(params.itemId) &&

        <div className='item'>
          <img alt={item.title} src={item.image}></img>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>

        
      ))}
      
        
    
    </div>
    
   
  )
}

export default Products;




  
 
  