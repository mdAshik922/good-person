import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    //destructring use
const {name, picture, age, company, balance, address, phone}= props.person;

    return (
        //dynamic 
        <div>
            <h2>Name:{name}</h2>
            <img src={picture} alt=''/>
       
<h3>Company:{company}</h3>
<p>age:{age}</p>
<h5>Salary:${balance}</h5>
<h4>Phone Number:{phone}</h4>
<p>Address:{address}</p>
<button onClick={() =>
 props.callThisPerson(props.person)} className='callThisPerson'
><FontAwesomeIcon icon={faPhoneAlt} />
    Call hear</button>

        </div>
    );
};

export default Person;