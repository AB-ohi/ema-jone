import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'

const Orders = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <div className="shop-container">
            <div className="order-container">
            {
                products.map(product =><ReviewItems
                    key={product.id}
                    product ={product}
                ></ReviewItems>)
            }
        </div>
        <div>
            <Cart cart={ products }></Cart>
        </div>
        </div>
    );
};

export default Orders;