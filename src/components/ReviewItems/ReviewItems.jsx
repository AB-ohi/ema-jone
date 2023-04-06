import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'

const ReviewItems = ({product, handelRemoveFromCart}) => {
    const {name, img, price, quantity, id} = product;

    // console.log(product)
    return (
        <div className='review-item'>
            
            <div className='about-items'>
            <img src={img} alt="" />
            <div>
                <h5>{name}</h5>
                <p>price: <span style={{color:'rgba(255, 153, 0, 1)'}}>${price}</span></p>
                <p>Order Quantity: <span style={{color:'rgba(255, 153, 0, 1)'}}>{quantity}</span></p>
            </div>
            </div>
            <div onClick={()=> handelRemoveFromCart(id)}  className='delete'>
            <FontAwesomeIcon className='delete-btn' icon={faTrashAlt} />
            </div>
            
        </div>
    );
};

export default ReviewItems;