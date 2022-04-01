import React from 'react';
import './Tshirt.css'
const Tshirt = (props) => {
    const {name,picture,price,index} = props.tshirt
    return (
        <div className='tshirt-container2'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <button>
               <small>Add to Cart</small>
            </button>
        </div>
    );
};

export default Tshirt;