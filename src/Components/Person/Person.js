import React from 'react';
import './Person.css';

const Person = (props) => {
   
const {name, picture, age, company, balance, address, phone} = props.person;

    return (
        //dynamic 
        <div>
            
            <img src={picture} alt='good-person'/>
            <h2>{name}</h2>
<h3>Company:{company}</h3>
<p>age:{age}</p>
<h5>Salary:${balance}</h5>
<h4>Phone Number:{phone}</h4>
<p>{address}</p>

<button className='payThisPerson' style={{marginBottom: "5%"}} onClick={() =>
 props.payThisPerson(props.person)} > Pay</button>

        </div>
    );
};

export default Person;