import moment from 'moment'
import React from 'react'
import "./Order.css"
import CheckoutProduct from './CheckoutProduct';
function Order({order}) {
    return (
        <div className="order">
            <p className="order__date">{moment.unix(order.data.created).format("LLLL")}</p>
            <p className="order__id">
                <h4>{order.id}</h4>
            </p>
            {order.data.basket?.map(item=>(
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                removeButton={true}
                />
            ))}
            <h3 className="order__total">
               Order Total: {order.data.amount/100} $
            </h3>
        </div>
    )
}

export default Order
