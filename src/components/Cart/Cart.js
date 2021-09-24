import React from 'react';

const Cart = (props) => {
 console.log(props.name)
   
    return (
        <div class="text-center">
            <h1>Order Card</h1>
            <p>Item Name:-{ props.name}</p>
        </div>
    );
};

export default Cart;