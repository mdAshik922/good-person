import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    for (const person of cart) {
       
        total = total + person.balance ;
 
    }
        

    return (
        <div>
    

    <h3>salary:${total} </h3>
        </div>
    );
};

export default Cart;