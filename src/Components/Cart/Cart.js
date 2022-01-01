import React from 'react';

const Cart = (props) => {
    const {cart} =props;
    let total= 0;
    for(const persons of cart){
total= total + persons.balance;
    }

    return (
        <div>
    <h3>Add Good Person:{props.cart.length}</h3>
<h3>Salare:{total} </h3>

        </div>
    );
};

export default Cart;