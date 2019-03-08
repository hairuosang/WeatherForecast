import React from 'react'

const Form = props => ( <form onSubmit={props.getWeather}>
  
  <label> Name: <input type="text" name="name"></input> </label> <br/>
  <label> Expiry Date: <input type="text" name="expiry date"></input> </label> <br/>
  <label> Quantity: <input type="text" name="quantity"></input> </label> <br/>
  <label> Storage: <input type="text" name="storage"></input> </label> <br/>

  <button onClick={props.clicked}>csc318</button> <button onClick={props.clicked}>csc318</button>
</form> );
   
export default Form;
  
