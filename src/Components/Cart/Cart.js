import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    let total= 0;
    for(let persons of cart){
total= total + persons.balance;
    }

    return (
        <div>
    <h3>Add Good Person:{props.cart.length}</h3>
<h3>salary:${total} </h3>

        </div>
    );
};

export default Cart;