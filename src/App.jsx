import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';

class App extends Component {
  state = {
    temperature : undefined,
    
  }



  render() {
    return (
      <div>
        <Form getWeather={this.submitWeatherHandler} clicked={this.clickedCheckHandler}/>
      </div>
    );
  }
}

export default App;
