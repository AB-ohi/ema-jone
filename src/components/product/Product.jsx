import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, quantity, price } = props.product;
  const handelAddToCart = props.handelAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <div className="product-info">
        <p className="price">Price: ${price}</p>
        <div className="others">
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings}Star</p>
        </div>
      </div>
      <button
        onClick={() => handelAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart   <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
