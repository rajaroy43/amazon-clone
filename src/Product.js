import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, image, rating }) {
  const[,dispatch]=useStateValue();
  const addTOBasket=()=>{
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating
        }
      })
  }
  return (
    <div className="product">
      <div className="product__info"> 
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating name="half-rating-read" value={rating} readOnly   precision={0.5}/>
      </div>
      <img src={image} alt="" />
      <button onClick={addTOBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
