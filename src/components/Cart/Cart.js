import React from 'react';
import './Cart.css'

const Cart = (props) => {
 console.log(props.name)
   
    return (
        <div class="text-center">
            <div className="cart">
                  <h1>Order Card</h1>
                <p>Item Name:-{ props.name }</p>
                <button class="btn btn-primary">Complete</button>
            </div>
        </div>
    );
};

export default Cart;