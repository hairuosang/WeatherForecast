import React from 'react'

const Form = props => ( <form onSubmit={props.getWeather}>
  <input type="text" name="city" placeholder="City..."></input>
  <input type="text" name="country" placeholder="Country..."></input>
  <input type="text" name="temp" placeholder="temp..."></input>
  
  <label>
    Name:
    <input type="text" name="name"></input>
  </label>

  <br/>

  <label>
    Expiry Date:
    <input type="text" name="name" />
  </label>
  
  
  <button onClick={props.clicked}>csc318</button>
</form> );
   
export default Form;
  
