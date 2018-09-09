import React from 'react'

const Weather = props => {
  let data = null;
  if (props.clicked && props.error === "No Errors!") {
    data = (<div>
        <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>
        <p className="weather__key"> Temperature: <span className="weather__value">{props.temperature}</span></p>
        <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>
        <p className="weather__key">Conditions: <span className="weather__value<">{props.description}</span></p>
      </div>);
  } else {
    data = <p className="weather__error">{props.error}</p>;
  }
  return (
    <div className="Weather">{data}</div>
  );
} 

export default Weather;
  
