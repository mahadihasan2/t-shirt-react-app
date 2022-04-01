import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
//    console.log(cart)
//01. conditional Rendering option 
    // Element Variable 

  let command;
  if(cart.length === 0){
      command = <p>Please Add at least one item!!! </p>
  }else if(cart.length === 1){
      command = <p>Please Add More ...</p>
  }else{
      command = <p>Thanks for Adding</p>
  }

  //02. Ternary operator condition ? true : false;
  // 03. && operator (ShortHand operator)
  
  
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
            {cart.length === 3 && <div className='orange'>
                        <h3>tin jon ke product de</h3>
                </div>}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Clear All</button> }
        </div>
    );
};

export default Cart;