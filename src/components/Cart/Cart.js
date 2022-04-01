import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
//    console.log(cart)
// conditional Rendering option 
    // Element Variable 

  let command;
  if(cart.length === 0){
      command = <p>Please Add at least one item!!! </p>
  }else if(cart.length === 1){
      command = <p>Please Add More ...</p>
  }else{
      command = <p>Thanks for Adding</p>
  }
    return (
        <div>
            <h2>selected Cart: {cart.length}</h2>
            {command}
            {
                cart.map(tshirt=><p>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;