import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTshirts from '../hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';
const Home = () => {
    const [tShirts, setTshirts] = useTshirts()
    const [cart, setCart] = useState([])

    const handleAddtoCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }else{
            alert('this item already esists')
        }
        // console.log(selectedItem)


    }

    const handleRemoveFromCart = (id) => {
        const rest = cart.filter(tshirt => tshirt._id !== id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tShirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;