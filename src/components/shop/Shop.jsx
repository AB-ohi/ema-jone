import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState ([]);

    const [cart,setCart] = useState([]);

     useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
     },[])


     useEffect(()=>{
        const storCart = getShoppingCart();
        const savedCart= [];
        // set 1: get id
        for (const id in storCart){
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // step 3: get quantity of the product
            
        }
        setCart(savedCart);
     },[products])

     const handelAddToCart = (product) => {
        console.log (product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
      }

    return (
        <div className= "shop-container">
            <div className= "products-container">
                {
                    products.map(product => <Product
                    key= {product.id}
                    product = {product}
                    handelAddToCart = {handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;