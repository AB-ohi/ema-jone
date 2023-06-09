import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {cart,clearAddToCart, children} = props;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart){

        if(product.quantity===0){
            product.quantity=1
        }
        // product.quantity = product.quantity || 1;


        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total *3/100;

    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>add to cart: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <div onClick={clearAddToCart} className='remove-all'>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
                {children}
        </div>
    );
};

export default Cart;