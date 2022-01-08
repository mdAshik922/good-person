import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    for (const person of cart) {
       
        total = total + person.balance ;
 
    }
        

    return (
     
    );
};

export default Cart;