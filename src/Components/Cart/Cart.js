import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   
    let total = 0;
    for (const person of cart) {
        total = total + parseInt(person.balance);
    }
        
    return (
        <div>
    <h3>Add Good Person:{props.cart.length}</h3>
    <h3>salary:${total} </h3>
        </div>
    );
};

export default Cart;