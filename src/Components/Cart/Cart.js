import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    for (const person of cart) {
       
        total = total + parseFloat(person.price) ;
       
    }
        

    return (
        <div>
    <h3>Add Good Person:{props.cart.length}</h3>
<h3>salary:${total.toFixed(2)} </h3>

        </div>
    );
};

export default Cart;