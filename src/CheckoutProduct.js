import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./CheckoutProduct.css";
import {useStateValue} from './StateProvider'
function CheckoutProduct({ id, title, price, rating, image ,removeButton}) {
  const [,dispatch]=useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image"/>
      <div className="checkoutProdut__info">
        <p className="checkoutProdut__title">{title}</p>
        <p className="checkoutProdut__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <Rating value={rating} readOnly />
        {removeButton?"":<button onClick={removeFromBasket}>Remove from basket</button>}
      </div>
      
    </div>
  );
}

export default CheckoutProduct;
