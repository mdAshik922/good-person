import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './component.css';
const Component = () => {
    const [persons, setPersons]=useState([]);
    const [cart, setCart]=useState([]);

useEffect(()=>{
    //FakeData  Load
    fetch('/FakeData.json')
    .then(res => res.json())
    .then(data => setPersons(data))
},[]);

//Click Handler
const payThisPerson =(person)=>{
    const newCart = [...cart, person];
    setCart(newCart);
}

    return (
        <div className='component'>
           <div className='component-container'>
           {
                persons.map(person =><Person
                key={person.id}
                person={person}
                payThisPerson={payThisPerson}
                ></Person>)
            }
           </div>
           <div className="second-component-container">
<Cart key={cart.id} cart={cart}></Cart>

<button>pay</button>
           </div>
        </div>
    );
};

export default Component;