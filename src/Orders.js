import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from './Order'
function Orders() {
  const [orders, setOrders] = useState([]);
  const [{basket,user}, dispatch] = useStateValue();
  console.log("hello",user);
  useEffect(() => {
    console.log("pop",user);
    if(user){
      console.log(user);
        db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => (
          setOrders(snapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
          })))
      ))
    }
    else{
        setOrders([])
    }
    console.log(user);
  }, [user]);
  return (
    <div className="orders">
      <h1 className="orders__your">Your Orders</h1>
      <div className="orders__order">
          {orders?.map(order=>(
            <Order order={order}/>
          ))}
      </div>
    </div>
  );
}

export default Orders;
