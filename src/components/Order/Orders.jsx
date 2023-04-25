import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCard = useLoaderData();

    const [cart, setCart] = useState (savedCard)
    
    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !==id);
        setCart(remaining);
        removeFromDb(id);

    }

    const clearAddToCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="shop-container">
            <div className="order-container">
            {
                cart.map(product =><ReviewItems
                    key={product.id}
                    product ={product}
                    handelRemoveFromCart = {handelRemoveFromCart}
                ></ReviewItems>)
            }
        </div>
        <div>
            <Cart
             cart={ cart }
             clearAddToCart = {clearAddToCart}
             >
                <Link to='/orders'>
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
             </Cart>
        </div>
        </div>
    );
};

export default Orders;