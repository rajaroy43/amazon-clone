import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const [{ basket }, ] = useStateValue();
  const history=useHistory()
  return (
    <div className="Subtotal">
      {/* price */}
      <p className="subtotal__itemsPrice">
        Subtotal {`(${basket.length} items) :`} <strong>${getBasketTotal(basket)}</strong>
      </p>
      <div className="subtotal__gift">
        <input type="checkbox" name="" id="checkbox" value="true" />
        <label htmlFor="checkbox">This order contains a gift</label>
      </div>
    <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
