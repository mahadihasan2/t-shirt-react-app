import React from 'react';
import './Tshirt.css'
const Tshirt = ({handleAddtoCart , tshirt}) => {
  
    const {name,picture,price} =tshirt
    return (
        <div className='tshirt-container2'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddtoCart(tshirt)}>
              Add to Cart
            </button>
        </div>
    );
};

export default Tshirt;