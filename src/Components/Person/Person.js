import React from 'react';
import './Person.css';

const Person = (props) => {
   
const {name, picture, age, company, balance, address, phone}= props.person;

    return (
        //dynamic 
        <div>
            
            <img src={picture} alt=''/>
            <h2>Name:{name}</h2>
<h3>Company:{company}</h3>
<p>age:{age}</p>
<h5>Salary:${balance}</h5>
<h4>Phone Number:{phone}</h4>
<p>Address:{address}</p>
<button style={{marginBottom: "5%"}} onClick={() =>
 props.payThisPerson(props.person)} className='payThisPerson'
>
    Pay</button>

        </div>
    );
};

export default Person;