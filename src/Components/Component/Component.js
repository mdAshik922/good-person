import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './component.css';
const Component = () => {
    const [persons, setPersons]=useState([]);
    const [cart, setCart]=useState([]);

useEffect(()=>{
    //Fack Data  Load
    fetch('./FackData.json')
    .then(res => res.json())
    .then(data => setPersons(data))
},[]);
//Click Heandelar
const payThisPerson =(person)=>{
    const newCart = [...cart, person];
    setCart(newCart);
}

    return (
        <div className='component'>
           <div className='component-container'>
           {
                persons.map(person =><Person
                id={person.id}
                person={person}
                payThisPerson={payThisPerson}
                ></Person>)
            }
           </div>
           <div className="second-component-container">
<Cart cart={cart}></Cart>

<button className='calling' 
>Call hear</button>
           </div>
        </div>
    );
};

export default Component;