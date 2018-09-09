import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY =  "0e0fed06a1fde898d79e1142dd554ce0";

class App extends Component {
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined,
    clicked : false,
  }

  submitWeatherHandler = async (event) => {                     // async await 
    event.preventDefault();                           //prevent page from refreshing          
    const city = event.target.elements.city.value;                                
    const country = event.target.elements.country.value;                          
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);                  // fetch api 
    
    const data = await api_call.json(); 

    if (city && country && data.message !== "city not found") {   //check both inputs are filled and correct
      this.setState({
        temperature : data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description : data.weather[0].description,
        error: "No Errors!"
      });
    } else {
      this.setState({
        error: "Please enter a value."
      })
    } 
  }

  clickedCheckHandler = () => {               // check if button was clicked 
    const check = this.state.clicked;
    this.setState({clicked : !check});
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form 
                  getWeather={this.submitWeatherHandler} 
                  clicked={this.clickedCheckHandler}/>
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    clicked={this.state.clicked}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
